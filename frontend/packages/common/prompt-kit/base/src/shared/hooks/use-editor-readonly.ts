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
 
import { useEffect, useState } from 'react';

import { useEditor } from '@coze-editor/editor/react';
import { type EditorAPI } from '@coze-editor/editor/preset-prompt';
import { type ViewUpdate } from '@codemirror/view';
export const useReadonly = () => {
  const editor = useEditor<EditorAPI>();
  const [isReadOnly, setIsReadOnly] = useState(false);
  useEffect(() => {
    if (!editor) {
      return;
    }
    setIsReadOnly(editor.$view.state.readOnly);
    const handleViewUpdate = (update: ViewUpdate) => {
      if (update.startState.readOnly !== update.state.readOnly) {
        setIsReadOnly(update.state.readOnly);
      }
    };
    editor.$on('viewUpdate', handleViewUpdate);
    return () => {
      editor.$off('viewUpdate', handleViewUpdate);
    };
  }, [editor]);
  return isReadOnly;
};
