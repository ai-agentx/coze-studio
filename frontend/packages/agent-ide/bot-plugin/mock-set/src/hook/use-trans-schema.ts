/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
import { useCallback, useMemo } from 'react';

import { safeJSONParse } from '@coze-arch/bot-utils';

import {
  ROOT_KEY,
  parseToolSchema,
  stringifyEditorContent,
  transDataWithStatus2Object,
  transSchema2DataWithStatus,
  MockDataValueType,
  type MockDataWithStatus,
} from '@coze-studio/mockset-shared';

import { getMergedDataWithStatus } from '../util/utils';

/** 缓存最新一个解析结果 */
const cache: {
  schema: string;
  result: MockDataWithStatus | undefined;
} = {
  schema: '',
  result: undefined,
};

export const PRE_DEFINED_NO_EMPTY_KEY = 'response_for_model';

function useGetCachedSchemaData(schema?: string) {
  const result = useMemo(() => {
    if (schema && cache.schema === schema) {
      return cache.result;
    }

    if (schema) {
      cache.schema = schema;
      const parsedSchema = parseToolSchema(schema);
      const transData = transSchema2DataWithStatus(ROOT_KEY, parsedSchema);
      cache.result = transData;
      return transData;
    }

    return undefined;
  }, [schema]);

  return result;
}

export function useTransSchema(schema?: string, currentMock?: string) {
  const result = useGetCachedSchemaData(schema);

  const {
    result: mergedResultExample,
    merged: mergedResult,
    incompatible,
    formatted: formattedResultExample,
  } = useMemo(() => {
    const { result: merged, incompatible: mergedIncompatible } =
      getMergedDataWithStatus(result, currentMock);

    if (merged) {
      const resultObj = transDataWithStatus2Object(
        merged,
        currentMock !== undefined,
      )?.[ROOT_KEY];

      return {
        merged,
        result: resultObj,
        formatted: stringifyEditorContent(resultObj),
        incompatible: mergedIncompatible,
      };
    } else {
      return {
        incompatible: mergedIncompatible,
      };
    }
  }, [result, currentMock]);

  // 特殊字段需要单独处理：response_for_model 不能为空字符串
  const testValueValid = useCallback(
    (value: string) => {
      if (
        result?.children?.some(
          item =>
            item.label === PRE_DEFINED_NO_EMPTY_KEY &&
            item.type === MockDataValueType.STRING,
        )
      ) {
        const parsedValue = safeJSONParse(value);
        if (
          typeof parsedValue === 'object' &&
          (typeof parsedValue[PRE_DEFINED_NO_EMPTY_KEY] !== 'string' ||
            parsedValue[PRE_DEFINED_NO_EMPTY_KEY].length === 0)
        ) {
          return false;
        }
      }

      return true;
    },
    [result],
  );

  return {
    // 由 schema 生成的结构话数据，值为初始值
    result,
    // 合并模拟数据的结构话数据，全集
    mergedResult,
    // mergedResult 转换的 object
    mergedResultExample,
    // 格式化的数据
    formattedResultExample,
    // 是否兼容
    incompatible,
    // 是否合并模拟数据
    isInit: currentMock === undefined,
    testValueValid,
  };
}
