/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import type {
  ModuleMap as _ModuleMap,
  SerializableModuleMap as _SerializableModuleMap,
  FS,
} from 'jest-haste-map';
import type {Path} from 'types/Config';

export type HasteFS = FS;
export type ModuleMap = _ModuleMap;
export type SerializableModuleMap = _SerializableModuleMap;

export type FileData = Map<Path, FileMetaData>;
export type MockData = Map<string, Path>;
export type ModuleMapData = Map<string, ModuleMapItem>;
export type WatchmanClocks = Map<Path, string>;
export type HasteRegExp = RegExp | ((str: string) => boolean);

export type DuplicatesSet = {
  [filePath: string]: /* type */ number,
  __proto__: null,
};
export type DuplicatesIndex = Map<
  string,
  {[platform: string]: DuplicatesSet, __proto__: null},
>;

export type InternalHasteMap = {|
  clocks: WatchmanClocks,
  duplicates: DuplicatesIndex,
  files: FileData,
  map: ModuleMapData,
  mocks: MockData,
|};

export type HasteMap = {|
  hasteFS: HasteFS,
  moduleMap: ModuleMap,
  __hasteMapForTest?: ?InternalHasteMap,
|};

export type RawModuleMap = {|
  duplicates: DuplicatesIndex,
  map: ModuleMapData,
  mocks: MockData,
|};

export type FileMetaData = [
  /* id */ string,
  /* mtime */ number,
  /* visited */ 0 | 1,
  /* dependencies */ Array<string>,
  /* sha1 */ ?string,
];

type ModuleMapItem = {[platform: string]: ModuleMetaData, __proto__: null};
export type ModuleMetaData = [Path, /* type */ number];

export type HType = {|
  ID: 0,
  MTIME: 1,
  VISITED: 2,
  DEPENDENCIES: 3,
  PATH: 0,
  TYPE: 1,
  MODULE: 0,
  PACKAGE: 1,
  GENERIC_PLATFORM: 'g',
  NATIVE_PLATFORM: 'native',
|};

export type HTypeValue = 0 | 1 | 2 | 3 | 'g';
