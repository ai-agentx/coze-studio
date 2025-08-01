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
 
// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import * as base from './namespaces/base';
import * as copilot_common from './namespaces/copilot_common';
import * as record from './namespaces/record';

export { base, copilot_common, record };
export * from './namespaces/base';
export * from './namespaces/copilot_common';
export * from './namespaces/record';

export type Int64 = string | number;

export default class PromptRecordApiService<T> {
  private request: any = () => {
    throw new Error('PromptRecordApiService.request is undefined');
  };
  private baseURL: string | ((path: string) => string) = '';

  constructor(options?: {
    baseURL?: string | ((path: string) => string);
    request?<R>(
      params: {
        url: string;
        method: 'GET' | 'DELETE' | 'POST' | 'PUT' | 'PATCH';
        data?: any;
        params?: any;
        headers?: any;
      },
      options?: T,
    ): Promise<R>;
  }) {
    this.request = options?.request || this.request;
    this.baseURL = options?.baseURL || '';
  }

  private genBaseURL(path: string) {
    return typeof this.baseURL === 'string'
      ? this.baseURL + path
      : this.baseURL(path);
  }

  /**
   * POST /api/model_ak/add
   *
   * 为空间添加模型ak
   */
  AddModelAK(
    req?: record.AddModelAKReq,
    options?: T,
  ): Promise<record.AddModelAKResp> {
    const _req = req || {};
    const url = this.genBaseURL('/api/model_ak/add');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      model_ak: _req['model_ak'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/model_ak/delete
   *
   * 删除某个空间的某个模型ak
   */
  DeleteModelAK(
    req?: record.DeleteModelAKReq,
    options?: T,
  ): Promise<record.DeleteModelAKResp> {
    const _req = req || {};
    const url = this.genBaseURL('/api/model_ak/delete');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      ak_id: _req['ak_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/limit/mget_space_limit */
  MGetSpaceLimit(
    req?: record.MGetSpaceLimitReq,
    options?: T,
  ): Promise<record.MGetSpaceLimitResp> {
    const _req = req || {};
    const url = this.genBaseURL('/api/limit/mget_space_limit');
    const method = 'POST';
    const data = { space_ids: _req['space_ids'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/limit/set_space_limit */
  SetSpaceLimit(
    req?: record.SetSpaceLimitReq,
    options?: T,
  ): Promise<record.SetSpaceLimitResp> {
    const _req = req || {};
    const url = this.genBaseURL('/api/limit/set_space_limit');
    const method = 'POST';
    const data = {
      limit_confs: _req['limit_confs'],
      space_id: _req['space_id'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /api/model_ak/list
   *
   * 为空间列出模型ak
   */
  ListModelAK(
    req?: record.ListModelAKReq,
    options?: T,
  ): Promise<record.ListModelAKResp> {
    const _req = req || {};
    const url = this.genBaseURL('/api/model_ak/list');
    const method = 'GET';
    const params = { space_id: _req['space_id'], Base: _req['Base'] };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/limit/set_user_with_space_limit */
  SetUserWithSpaceLimit(
    req?: record.SetUserWithSpaceLimitReq,
    options?: T,
  ): Promise<record.SetUserWithSpaceLimitResp> {
    const _req = req || {};
    const url = this.genBaseURL('/api/limit/set_user_with_space_limit');
    const method = 'POST';
    const data = { space_id: _req['space_id'], limits: _req['limits'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/limit/get_user_with_space_limit */
  GetUserWithSpaceLimit(
    req?: record.GetUserWithSpaceLimitReq,
    options?: T,
  ): Promise<record.GetUserWithSpaceLimitResp> {
    const _req = req || {};
    const url = this.genBaseURL('/api/limit/get_user_with_space_limit');
    const method = 'POST';
    const data = { space_id: _req['space_id'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/limit/mis_tool/update_conf_op */
  AdminUpdateConfOp(
    req?: record.AdminUpdateConfOpReq,
    options?: T,
  ): Promise<record.AdminUpdateConfOpResp> {
    const _req = req || {};
    const url = this.genBaseURL('/api/limit/mis_tool/update_conf_op');
    const method = 'POST';
    const data = {
      op_id: _req['op_id'],
      op_status: _req['op_status'],
      Base: _req['Base'],
    };
    const headers = { 'X-Jwt-Token-Acl-Acc': _req['X-Jwt-Token-Acl-Acc'] };
    return this.request({ url, method, data, headers }, options);
  }

  /** POST /api/limit/mis_tool/check_conf_op_release_time */
  AdminCheckConfOpReleaseTime(
    req?: record.AdminCheckConfOpReleaseTimeReq,
    options?: T,
  ): Promise<record.AdminCheckConfOpReleaseTimeResp> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/limit/mis_tool/check_conf_op_release_time',
    );
    const method = 'POST';
    const data = {
      op_id: _req['op_id'],
      op_creator: _req['op_creator'],
      Base: _req['Base'],
    };
    const headers = { 'X-Jwt-Token-Acl-Acc': _req['X-Jwt-Token-Acl-Acc'] };
    return this.request({ url, method, data, headers }, options);
  }

  /** POST /api/limit/mis_tool/update_conf */
  AdminUpdateConfWithOp(
    req?: record.AdminUpdateConfWithOpReq,
    options?: T,
  ): Promise<record.AdminUpdateConfWithOpResp> {
    const _req = req || {};
    const url = this.genBaseURL('/api/limit/mis_tool/update_conf');
    const method = 'POST';
    const data = {
      op_id: _req['op_id'],
      update_type: _req['update_type'],
      Base: _req['Base'],
    };
    const headers = { 'X-Jwt-Token-Acl-Acc': _req['X-Jwt-Token-Acl-Acc'] };
    return this.request({ url, method, data, headers }, options);
  }

  /** POST /api/limit/mis_tool/check_conf_op_guard */
  AdminCheckConfOpGuard(
    req?: record.AdminCheckConfOpGuardReq,
    options?: T,
  ): Promise<record.AdminCheckConfOpGuardResp> {
    const _req = req || {};
    const url = this.genBaseURL('/api/limit/mis_tool/check_conf_op_guard');
    const method = 'POST';
    const data = {
      op_id: _req['op_id'],
      op_creator: _req['op_creator'],
      Base: _req['Base'],
    };
    const headers = { 'X-Jwt-Token-Acl-Acc': _req['X-Jwt-Token-Acl-Acc'] };
    return this.request({ url, method, data, headers }, options);
  }
}
/* eslint-enable */
