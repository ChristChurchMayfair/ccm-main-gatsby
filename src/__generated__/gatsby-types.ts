/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  JSON: never;
};











type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};


type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  publicURL = 'publicURL',
  childImageSharp___fixed___base64 = 'childImageSharp.fixed.base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp.fixed.tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp.fixed.aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp.fixed.width',
  childImageSharp___fixed___height = 'childImageSharp.fixed.height',
  childImageSharp___fixed___src = 'childImageSharp.fixed.src',
  childImageSharp___fixed___srcSet = 'childImageSharp.fixed.srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp.fixed.srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp.fixed.srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp.fixed.originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp.resolutions.base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp.resolutions.tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp.resolutions.aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp.resolutions.width',
  childImageSharp___resolutions___height = 'childImageSharp.resolutions.height',
  childImageSharp___resolutions___src = 'childImageSharp.resolutions.src',
  childImageSharp___resolutions___srcSet = 'childImageSharp.resolutions.srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp.resolutions.srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp.resolutions.srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp.resolutions.originalName',
  childImageSharp___fluid___base64 = 'childImageSharp.fluid.base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp.fluid.tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp.fluid.aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp.fluid.src',
  childImageSharp___fluid___srcSet = 'childImageSharp.fluid.srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp.fluid.srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp.fluid.srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp.fluid.sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp.fluid.originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp.fluid.originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp.fluid.presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp.fluid.presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp.sizes.base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp.sizes.tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp.sizes.aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp.sizes.src',
  childImageSharp___sizes___srcSet = 'childImageSharp.sizes.srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp.sizes.srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp.sizes.srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp.sizes.sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp.sizes.originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp.sizes.originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp.sizes.presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp.sizes.presentationHeight',
  childImageSharp___original___width = 'childImageSharp.original.width',
  childImageSharp___original___height = 'childImageSharp.original.height',
  childImageSharp___original___src = 'childImageSharp.original.src',
  childImageSharp___resize___src = 'childImageSharp.resize.src',
  childImageSharp___resize___tracedSVG = 'childImageSharp.resize.tracedSVG',
  childImageSharp___resize___width = 'childImageSharp.resize.width',
  childImageSharp___resize___height = 'childImageSharp.resize.height',
  childImageSharp___resize___aspectRatio = 'childImageSharp.resize.aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp.resize.originalName',
  childImageSharp___id = 'childImageSharp.id',
  childImageSharp___parent___id = 'childImageSharp.parent.id',
  childImageSharp___parent___parent___id = 'childImageSharp.parent.parent.id',
  childImageSharp___parent___parent___children = 'childImageSharp.parent.parent.children',
  childImageSharp___parent___children = 'childImageSharp.parent.children',
  childImageSharp___parent___children___id = 'childImageSharp.parent.children.id',
  childImageSharp___parent___children___children = 'childImageSharp.parent.children.children',
  childImageSharp___parent___internal___content = 'childImageSharp.parent.internal.content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp.parent.internal.contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp.parent.internal.description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp.parent.internal.fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp.parent.internal.ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp.parent.internal.mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp.parent.internal.owner',
  childImageSharp___parent___internal___type = 'childImageSharp.parent.internal.type',
  childImageSharp___children = 'childImageSharp.children',
  childImageSharp___children___id = 'childImageSharp.children.id',
  childImageSharp___children___parent___id = 'childImageSharp.children.parent.id',
  childImageSharp___children___parent___children = 'childImageSharp.children.parent.children',
  childImageSharp___children___children = 'childImageSharp.children.children',
  childImageSharp___children___children___id = 'childImageSharp.children.children.id',
  childImageSharp___children___children___children = 'childImageSharp.children.children.children',
  childImageSharp___children___internal___content = 'childImageSharp.children.internal.content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp.children.internal.contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp.children.internal.description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp.children.internal.fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp.children.internal.ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp.children.internal.mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp.children.internal.owner',
  childImageSharp___children___internal___type = 'childImageSharp.children.internal.type',
  childImageSharp___internal___content = 'childImageSharp.internal.content',
  childImageSharp___internal___contentDigest = 'childImageSharp.internal.contentDigest',
  childImageSharp___internal___description = 'childImageSharp.internal.description',
  childImageSharp___internal___fieldOwners = 'childImageSharp.internal.fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp.internal.ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp.internal.mediaType',
  childImageSharp___internal___owner = 'childImageSharp.internal.owner',
  childImageSharp___internal___type = 'childImageSharp.internal.type',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  childMarkdownRemark___id = 'childMarkdownRemark.id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark.frontmatter.title',
  childMarkdownRemark___frontmatter___path = 'childMarkdownRemark.frontmatter.path',
  childMarkdownRemark___frontmatter___showInFooter = 'childMarkdownRemark.frontmatter.showInFooter',
  childMarkdownRemark___frontmatter___headerColour = 'childMarkdownRemark.frontmatter.headerColour',
  childMarkdownRemark___frontmatter___template = 'childMarkdownRemark.frontmatter.template',
  childMarkdownRemark___frontmatter___showInMenu = 'childMarkdownRemark.frontmatter.showInMenu',
  childMarkdownRemark___frontmatter___menuOrder = 'childMarkdownRemark.frontmatter.menuOrder',
  childMarkdownRemark___frontmatter___mainImage___sourceInstanceName = 'childMarkdownRemark.frontmatter.mainImage.sourceInstanceName',
  childMarkdownRemark___frontmatter___mainImage___absolutePath = 'childMarkdownRemark.frontmatter.mainImage.absolutePath',
  childMarkdownRemark___frontmatter___mainImage___relativePath = 'childMarkdownRemark.frontmatter.mainImage.relativePath',
  childMarkdownRemark___frontmatter___mainImage___extension = 'childMarkdownRemark.frontmatter.mainImage.extension',
  childMarkdownRemark___frontmatter___mainImage___size = 'childMarkdownRemark.frontmatter.mainImage.size',
  childMarkdownRemark___frontmatter___mainImage___prettySize = 'childMarkdownRemark.frontmatter.mainImage.prettySize',
  childMarkdownRemark___frontmatter___mainImage___modifiedTime = 'childMarkdownRemark.frontmatter.mainImage.modifiedTime',
  childMarkdownRemark___frontmatter___mainImage___accessTime = 'childMarkdownRemark.frontmatter.mainImage.accessTime',
  childMarkdownRemark___frontmatter___mainImage___changeTime = 'childMarkdownRemark.frontmatter.mainImage.changeTime',
  childMarkdownRemark___frontmatter___mainImage___birthTime = 'childMarkdownRemark.frontmatter.mainImage.birthTime',
  childMarkdownRemark___frontmatter___mainImage___root = 'childMarkdownRemark.frontmatter.mainImage.root',
  childMarkdownRemark___frontmatter___mainImage___dir = 'childMarkdownRemark.frontmatter.mainImage.dir',
  childMarkdownRemark___frontmatter___mainImage___base = 'childMarkdownRemark.frontmatter.mainImage.base',
  childMarkdownRemark___frontmatter___mainImage___ext = 'childMarkdownRemark.frontmatter.mainImage.ext',
  childMarkdownRemark___frontmatter___mainImage___name = 'childMarkdownRemark.frontmatter.mainImage.name',
  childMarkdownRemark___frontmatter___mainImage___relativeDirectory = 'childMarkdownRemark.frontmatter.mainImage.relativeDirectory',
  childMarkdownRemark___frontmatter___mainImage___dev = 'childMarkdownRemark.frontmatter.mainImage.dev',
  childMarkdownRemark___frontmatter___mainImage___mode = 'childMarkdownRemark.frontmatter.mainImage.mode',
  childMarkdownRemark___frontmatter___mainImage___nlink = 'childMarkdownRemark.frontmatter.mainImage.nlink',
  childMarkdownRemark___frontmatter___mainImage___uid = 'childMarkdownRemark.frontmatter.mainImage.uid',
  childMarkdownRemark___frontmatter___mainImage___gid = 'childMarkdownRemark.frontmatter.mainImage.gid',
  childMarkdownRemark___frontmatter___mainImage___rdev = 'childMarkdownRemark.frontmatter.mainImage.rdev',
  childMarkdownRemark___frontmatter___mainImage___ino = 'childMarkdownRemark.frontmatter.mainImage.ino',
  childMarkdownRemark___frontmatter___mainImage___atimeMs = 'childMarkdownRemark.frontmatter.mainImage.atimeMs',
  childMarkdownRemark___frontmatter___mainImage___mtimeMs = 'childMarkdownRemark.frontmatter.mainImage.mtimeMs',
  childMarkdownRemark___frontmatter___mainImage___ctimeMs = 'childMarkdownRemark.frontmatter.mainImage.ctimeMs',
  childMarkdownRemark___frontmatter___mainImage___atime = 'childMarkdownRemark.frontmatter.mainImage.atime',
  childMarkdownRemark___frontmatter___mainImage___mtime = 'childMarkdownRemark.frontmatter.mainImage.mtime',
  childMarkdownRemark___frontmatter___mainImage___ctime = 'childMarkdownRemark.frontmatter.mainImage.ctime',
  childMarkdownRemark___frontmatter___mainImage___birthtime = 'childMarkdownRemark.frontmatter.mainImage.birthtime',
  childMarkdownRemark___frontmatter___mainImage___birthtimeMs = 'childMarkdownRemark.frontmatter.mainImage.birthtimeMs',
  childMarkdownRemark___frontmatter___mainImage___blksize = 'childMarkdownRemark.frontmatter.mainImage.blksize',
  childMarkdownRemark___frontmatter___mainImage___blocks = 'childMarkdownRemark.frontmatter.mainImage.blocks',
  childMarkdownRemark___frontmatter___mainImage___publicURL = 'childMarkdownRemark.frontmatter.mainImage.publicURL',
  childMarkdownRemark___frontmatter___mainImage___id = 'childMarkdownRemark.frontmatter.mainImage.id',
  childMarkdownRemark___frontmatter___mainImage___children = 'childMarkdownRemark.frontmatter.mainImage.children',
  childMarkdownRemark___frontmatter___firstIntroImage___sourceInstanceName = 'childMarkdownRemark.frontmatter.firstIntroImage.sourceInstanceName',
  childMarkdownRemark___frontmatter___firstIntroImage___absolutePath = 'childMarkdownRemark.frontmatter.firstIntroImage.absolutePath',
  childMarkdownRemark___frontmatter___firstIntroImage___relativePath = 'childMarkdownRemark.frontmatter.firstIntroImage.relativePath',
  childMarkdownRemark___frontmatter___firstIntroImage___extension = 'childMarkdownRemark.frontmatter.firstIntroImage.extension',
  childMarkdownRemark___frontmatter___firstIntroImage___size = 'childMarkdownRemark.frontmatter.firstIntroImage.size',
  childMarkdownRemark___frontmatter___firstIntroImage___prettySize = 'childMarkdownRemark.frontmatter.firstIntroImage.prettySize',
  childMarkdownRemark___frontmatter___firstIntroImage___modifiedTime = 'childMarkdownRemark.frontmatter.firstIntroImage.modifiedTime',
  childMarkdownRemark___frontmatter___firstIntroImage___accessTime = 'childMarkdownRemark.frontmatter.firstIntroImage.accessTime',
  childMarkdownRemark___frontmatter___firstIntroImage___changeTime = 'childMarkdownRemark.frontmatter.firstIntroImage.changeTime',
  childMarkdownRemark___frontmatter___firstIntroImage___birthTime = 'childMarkdownRemark.frontmatter.firstIntroImage.birthTime',
  childMarkdownRemark___frontmatter___firstIntroImage___root = 'childMarkdownRemark.frontmatter.firstIntroImage.root',
  childMarkdownRemark___frontmatter___firstIntroImage___dir = 'childMarkdownRemark.frontmatter.firstIntroImage.dir',
  childMarkdownRemark___frontmatter___firstIntroImage___base = 'childMarkdownRemark.frontmatter.firstIntroImage.base',
  childMarkdownRemark___frontmatter___firstIntroImage___ext = 'childMarkdownRemark.frontmatter.firstIntroImage.ext',
  childMarkdownRemark___frontmatter___firstIntroImage___name = 'childMarkdownRemark.frontmatter.firstIntroImage.name',
  childMarkdownRemark___frontmatter___firstIntroImage___relativeDirectory = 'childMarkdownRemark.frontmatter.firstIntroImage.relativeDirectory',
  childMarkdownRemark___frontmatter___firstIntroImage___dev = 'childMarkdownRemark.frontmatter.firstIntroImage.dev',
  childMarkdownRemark___frontmatter___firstIntroImage___mode = 'childMarkdownRemark.frontmatter.firstIntroImage.mode',
  childMarkdownRemark___frontmatter___firstIntroImage___nlink = 'childMarkdownRemark.frontmatter.firstIntroImage.nlink',
  childMarkdownRemark___frontmatter___firstIntroImage___uid = 'childMarkdownRemark.frontmatter.firstIntroImage.uid',
  childMarkdownRemark___frontmatter___firstIntroImage___gid = 'childMarkdownRemark.frontmatter.firstIntroImage.gid',
  childMarkdownRemark___frontmatter___firstIntroImage___rdev = 'childMarkdownRemark.frontmatter.firstIntroImage.rdev',
  childMarkdownRemark___frontmatter___firstIntroImage___ino = 'childMarkdownRemark.frontmatter.firstIntroImage.ino',
  childMarkdownRemark___frontmatter___firstIntroImage___atimeMs = 'childMarkdownRemark.frontmatter.firstIntroImage.atimeMs',
  childMarkdownRemark___frontmatter___firstIntroImage___mtimeMs = 'childMarkdownRemark.frontmatter.firstIntroImage.mtimeMs',
  childMarkdownRemark___frontmatter___firstIntroImage___ctimeMs = 'childMarkdownRemark.frontmatter.firstIntroImage.ctimeMs',
  childMarkdownRemark___frontmatter___firstIntroImage___atime = 'childMarkdownRemark.frontmatter.firstIntroImage.atime',
  childMarkdownRemark___frontmatter___firstIntroImage___mtime = 'childMarkdownRemark.frontmatter.firstIntroImage.mtime',
  childMarkdownRemark___frontmatter___firstIntroImage___ctime = 'childMarkdownRemark.frontmatter.firstIntroImage.ctime',
  childMarkdownRemark___frontmatter___firstIntroImage___birthtime = 'childMarkdownRemark.frontmatter.firstIntroImage.birthtime',
  childMarkdownRemark___frontmatter___firstIntroImage___birthtimeMs = 'childMarkdownRemark.frontmatter.firstIntroImage.birthtimeMs',
  childMarkdownRemark___frontmatter___firstIntroImage___blksize = 'childMarkdownRemark.frontmatter.firstIntroImage.blksize',
  childMarkdownRemark___frontmatter___firstIntroImage___blocks = 'childMarkdownRemark.frontmatter.firstIntroImage.blocks',
  childMarkdownRemark___frontmatter___firstIntroImage___publicURL = 'childMarkdownRemark.frontmatter.firstIntroImage.publicURL',
  childMarkdownRemark___frontmatter___firstIntroImage___id = 'childMarkdownRemark.frontmatter.firstIntroImage.id',
  childMarkdownRemark___frontmatter___firstIntroImage___children = 'childMarkdownRemark.frontmatter.firstIntroImage.children',
  childMarkdownRemark___frontmatter___secondIntroImage___sourceInstanceName = 'childMarkdownRemark.frontmatter.secondIntroImage.sourceInstanceName',
  childMarkdownRemark___frontmatter___secondIntroImage___absolutePath = 'childMarkdownRemark.frontmatter.secondIntroImage.absolutePath',
  childMarkdownRemark___frontmatter___secondIntroImage___relativePath = 'childMarkdownRemark.frontmatter.secondIntroImage.relativePath',
  childMarkdownRemark___frontmatter___secondIntroImage___extension = 'childMarkdownRemark.frontmatter.secondIntroImage.extension',
  childMarkdownRemark___frontmatter___secondIntroImage___size = 'childMarkdownRemark.frontmatter.secondIntroImage.size',
  childMarkdownRemark___frontmatter___secondIntroImage___prettySize = 'childMarkdownRemark.frontmatter.secondIntroImage.prettySize',
  childMarkdownRemark___frontmatter___secondIntroImage___modifiedTime = 'childMarkdownRemark.frontmatter.secondIntroImage.modifiedTime',
  childMarkdownRemark___frontmatter___secondIntroImage___accessTime = 'childMarkdownRemark.frontmatter.secondIntroImage.accessTime',
  childMarkdownRemark___frontmatter___secondIntroImage___changeTime = 'childMarkdownRemark.frontmatter.secondIntroImage.changeTime',
  childMarkdownRemark___frontmatter___secondIntroImage___birthTime = 'childMarkdownRemark.frontmatter.secondIntroImage.birthTime',
  childMarkdownRemark___frontmatter___secondIntroImage___root = 'childMarkdownRemark.frontmatter.secondIntroImage.root',
  childMarkdownRemark___frontmatter___secondIntroImage___dir = 'childMarkdownRemark.frontmatter.secondIntroImage.dir',
  childMarkdownRemark___frontmatter___secondIntroImage___base = 'childMarkdownRemark.frontmatter.secondIntroImage.base',
  childMarkdownRemark___frontmatter___secondIntroImage___ext = 'childMarkdownRemark.frontmatter.secondIntroImage.ext',
  childMarkdownRemark___frontmatter___secondIntroImage___name = 'childMarkdownRemark.frontmatter.secondIntroImage.name',
  childMarkdownRemark___frontmatter___secondIntroImage___relativeDirectory = 'childMarkdownRemark.frontmatter.secondIntroImage.relativeDirectory',
  childMarkdownRemark___frontmatter___secondIntroImage___dev = 'childMarkdownRemark.frontmatter.secondIntroImage.dev',
  childMarkdownRemark___frontmatter___secondIntroImage___mode = 'childMarkdownRemark.frontmatter.secondIntroImage.mode',
  childMarkdownRemark___frontmatter___secondIntroImage___nlink = 'childMarkdownRemark.frontmatter.secondIntroImage.nlink',
  childMarkdownRemark___frontmatter___secondIntroImage___uid = 'childMarkdownRemark.frontmatter.secondIntroImage.uid',
  childMarkdownRemark___frontmatter___secondIntroImage___gid = 'childMarkdownRemark.frontmatter.secondIntroImage.gid',
  childMarkdownRemark___frontmatter___secondIntroImage___rdev = 'childMarkdownRemark.frontmatter.secondIntroImage.rdev',
  childMarkdownRemark___frontmatter___secondIntroImage___ino = 'childMarkdownRemark.frontmatter.secondIntroImage.ino',
  childMarkdownRemark___frontmatter___secondIntroImage___atimeMs = 'childMarkdownRemark.frontmatter.secondIntroImage.atimeMs',
  childMarkdownRemark___frontmatter___secondIntroImage___mtimeMs = 'childMarkdownRemark.frontmatter.secondIntroImage.mtimeMs',
  childMarkdownRemark___frontmatter___secondIntroImage___ctimeMs = 'childMarkdownRemark.frontmatter.secondIntroImage.ctimeMs',
  childMarkdownRemark___frontmatter___secondIntroImage___atime = 'childMarkdownRemark.frontmatter.secondIntroImage.atime',
  childMarkdownRemark___frontmatter___secondIntroImage___mtime = 'childMarkdownRemark.frontmatter.secondIntroImage.mtime',
  childMarkdownRemark___frontmatter___secondIntroImage___ctime = 'childMarkdownRemark.frontmatter.secondIntroImage.ctime',
  childMarkdownRemark___frontmatter___secondIntroImage___birthtime = 'childMarkdownRemark.frontmatter.secondIntroImage.birthtime',
  childMarkdownRemark___frontmatter___secondIntroImage___birthtimeMs = 'childMarkdownRemark.frontmatter.secondIntroImage.birthtimeMs',
  childMarkdownRemark___frontmatter___secondIntroImage___blksize = 'childMarkdownRemark.frontmatter.secondIntroImage.blksize',
  childMarkdownRemark___frontmatter___secondIntroImage___blocks = 'childMarkdownRemark.frontmatter.secondIntroImage.blocks',
  childMarkdownRemark___frontmatter___secondIntroImage___publicURL = 'childMarkdownRemark.frontmatter.secondIntroImage.publicURL',
  childMarkdownRemark___frontmatter___secondIntroImage___id = 'childMarkdownRemark.frontmatter.secondIntroImage.id',
  childMarkdownRemark___frontmatter___secondIntroImage___children = 'childMarkdownRemark.frontmatter.secondIntroImage.children',
  childMarkdownRemark___frontmatter___overlayCaption = 'childMarkdownRemark.frontmatter.overlayCaption',
  childMarkdownRemark___frontmatter___captionPosition = 'childMarkdownRemark.frontmatter.captionPosition',
  childMarkdownRemark___frontmatter___findOutMoreText = 'childMarkdownRemark.frontmatter.findOutMoreText',
  childMarkdownRemark___frontmatter___signupPlaceholder = 'childMarkdownRemark.frontmatter.signupPlaceholder',
  childMarkdownRemark___frontmatter___action = 'childMarkdownRemark.frontmatter.action',
  childMarkdownRemark___frontmatter___hiddenValue = 'childMarkdownRemark.frontmatter.hiddenValue',
  childMarkdownRemark___frontmatter___layout = 'childMarkdownRemark.frontmatter.layout',
  childMarkdownRemark___frontmatter___section = 'childMarkdownRemark.frontmatter.section',
  childMarkdownRemark___frontmatter___image___sourceInstanceName = 'childMarkdownRemark.frontmatter.image.sourceInstanceName',
  childMarkdownRemark___frontmatter___image___absolutePath = 'childMarkdownRemark.frontmatter.image.absolutePath',
  childMarkdownRemark___frontmatter___image___relativePath = 'childMarkdownRemark.frontmatter.image.relativePath',
  childMarkdownRemark___frontmatter___image___extension = 'childMarkdownRemark.frontmatter.image.extension',
  childMarkdownRemark___frontmatter___image___size = 'childMarkdownRemark.frontmatter.image.size',
  childMarkdownRemark___frontmatter___image___prettySize = 'childMarkdownRemark.frontmatter.image.prettySize',
  childMarkdownRemark___frontmatter___image___modifiedTime = 'childMarkdownRemark.frontmatter.image.modifiedTime',
  childMarkdownRemark___frontmatter___image___accessTime = 'childMarkdownRemark.frontmatter.image.accessTime',
  childMarkdownRemark___frontmatter___image___changeTime = 'childMarkdownRemark.frontmatter.image.changeTime',
  childMarkdownRemark___frontmatter___image___birthTime = 'childMarkdownRemark.frontmatter.image.birthTime',
  childMarkdownRemark___frontmatter___image___root = 'childMarkdownRemark.frontmatter.image.root',
  childMarkdownRemark___frontmatter___image___dir = 'childMarkdownRemark.frontmatter.image.dir',
  childMarkdownRemark___frontmatter___image___base = 'childMarkdownRemark.frontmatter.image.base',
  childMarkdownRemark___frontmatter___image___ext = 'childMarkdownRemark.frontmatter.image.ext',
  childMarkdownRemark___frontmatter___image___name = 'childMarkdownRemark.frontmatter.image.name',
  childMarkdownRemark___frontmatter___image___relativeDirectory = 'childMarkdownRemark.frontmatter.image.relativeDirectory',
  childMarkdownRemark___frontmatter___image___dev = 'childMarkdownRemark.frontmatter.image.dev',
  childMarkdownRemark___frontmatter___image___mode = 'childMarkdownRemark.frontmatter.image.mode',
  childMarkdownRemark___frontmatter___image___nlink = 'childMarkdownRemark.frontmatter.image.nlink',
  childMarkdownRemark___frontmatter___image___uid = 'childMarkdownRemark.frontmatter.image.uid',
  childMarkdownRemark___frontmatter___image___gid = 'childMarkdownRemark.frontmatter.image.gid',
  childMarkdownRemark___frontmatter___image___rdev = 'childMarkdownRemark.frontmatter.image.rdev',
  childMarkdownRemark___frontmatter___image___ino = 'childMarkdownRemark.frontmatter.image.ino',
  childMarkdownRemark___frontmatter___image___atimeMs = 'childMarkdownRemark.frontmatter.image.atimeMs',
  childMarkdownRemark___frontmatter___image___mtimeMs = 'childMarkdownRemark.frontmatter.image.mtimeMs',
  childMarkdownRemark___frontmatter___image___ctimeMs = 'childMarkdownRemark.frontmatter.image.ctimeMs',
  childMarkdownRemark___frontmatter___image___atime = 'childMarkdownRemark.frontmatter.image.atime',
  childMarkdownRemark___frontmatter___image___mtime = 'childMarkdownRemark.frontmatter.image.mtime',
  childMarkdownRemark___frontmatter___image___ctime = 'childMarkdownRemark.frontmatter.image.ctime',
  childMarkdownRemark___frontmatter___image___birthtime = 'childMarkdownRemark.frontmatter.image.birthtime',
  childMarkdownRemark___frontmatter___image___birthtimeMs = 'childMarkdownRemark.frontmatter.image.birthtimeMs',
  childMarkdownRemark___frontmatter___image___blksize = 'childMarkdownRemark.frontmatter.image.blksize',
  childMarkdownRemark___frontmatter___image___blocks = 'childMarkdownRemark.frontmatter.image.blocks',
  childMarkdownRemark___frontmatter___image___publicURL = 'childMarkdownRemark.frontmatter.image.publicURL',
  childMarkdownRemark___frontmatter___image___id = 'childMarkdownRemark.frontmatter.image.id',
  childMarkdownRemark___frontmatter___image___children = 'childMarkdownRemark.frontmatter.image.children',
  childMarkdownRemark___frontmatter___carouselImages = 'childMarkdownRemark.frontmatter.carouselImages',
  childMarkdownRemark___frontmatter___carouselImages___position = 'childMarkdownRemark.frontmatter.carouselImages.position',
  childMarkdownRemark___frontmatter___sitemap = 'childMarkdownRemark.frontmatter.sitemap',
  childMarkdownRemark___frontmatter___image_alignment_classes = 'childMarkdownRemark.frontmatter.image_alignment_classes',
  childMarkdownRemark___frontmatter___itunesPodcastURL = 'childMarkdownRemark.frontmatter.itunesPodcastURL',
  childMarkdownRemark___frontmatter___podcastURL = 'childMarkdownRemark.frontmatter.podcastURL',
  childMarkdownRemark___frontmatter___iosAppStoreLink = 'childMarkdownRemark.frontmatter.iosAppStoreLink',
  childMarkdownRemark___frontmatter___playStoreLink = 'childMarkdownRemark.frontmatter.playStoreLink',
  childMarkdownRemark___frontmatter___mobileImage = 'childMarkdownRemark.frontmatter.mobileImage',
  childMarkdownRemark___frontmatter___releases = 'childMarkdownRemark.frontmatter.releases',
  childMarkdownRemark___frontmatter___releases___title = 'childMarkdownRemark.frontmatter.releases.title',
  childMarkdownRemark___frontmatter___releases___type = 'childMarkdownRemark.frontmatter.releases.type',
  childMarkdownRemark___frontmatter___releases___date = 'childMarkdownRemark.frontmatter.releases.date',
  childMarkdownRemark___frontmatter___releases___appleMusicLink = 'childMarkdownRemark.frontmatter.releases.appleMusicLink',
  childMarkdownRemark___frontmatter___releases___spotifyLink = 'childMarkdownRemark.frontmatter.releases.spotifyLink',
  childMarkdownRemark___frontmatter___resources = 'childMarkdownRemark.frontmatter.resources',
  childMarkdownRemark___frontmatter___resources___title = 'childMarkdownRemark.frontmatter.resources.title',
  childMarkdownRemark___frontmatter___resources___files = 'childMarkdownRemark.frontmatter.resources.files',
  childMarkdownRemark___frontmatter___dayOfWeek = 'childMarkdownRemark.frontmatter.dayOfWeek',
  childMarkdownRemark___frontmatter___type = 'childMarkdownRemark.frontmatter.type',
  childMarkdownRemark___frontmatter___time = 'childMarkdownRemark.frontmatter.time',
  childMarkdownRemark___frontmatter___timeOfDay = 'childMarkdownRemark.frontmatter.timeOfDay',
  childMarkdownRemark___frontmatter___name = 'childMarkdownRemark.frontmatter.name',
  childMarkdownRemark___frontmatter___status = 'childMarkdownRemark.frontmatter.status',
  childMarkdownRemark___frontmatter___backgroundColour = 'childMarkdownRemark.frontmatter.backgroundColour',
  childMarkdownRemark___frontmatter___textColour = 'childMarkdownRemark.frontmatter.textColour',
  childMarkdownRemark___frontmatter___eventType = 'childMarkdownRemark.frontmatter.eventType',
  childMarkdownRemark___frontmatter___events = 'childMarkdownRemark.frontmatter.events',
  childMarkdownRemark___frontmatter___events___title = 'childMarkdownRemark.frontmatter.events.title',
  childMarkdownRemark___frontmatter___events___description = 'childMarkdownRemark.frontmatter.events.description',
  childMarkdownRemark___frontmatter___events___date = 'childMarkdownRemark.frontmatter.events.date',
  childMarkdownRemark___frontmatter___events___time = 'childMarkdownRemark.frontmatter.events.time',
  childMarkdownRemark___frontmatter___events___expires = 'childMarkdownRemark.frontmatter.events.expires',
  childMarkdownRemark___frontmatter___events___tags = 'childMarkdownRemark.frontmatter.events.tags',
  childMarkdownRemark___frontmatter___order = 'childMarkdownRemark.frontmatter.order',
  childMarkdownRemark___frontmatter___lastUpdated = 'childMarkdownRemark.frontmatter.lastUpdated',
  childMarkdownRemark___frontmatter___features = 'childMarkdownRemark.frontmatter.features',
  childMarkdownRemark___frontmatter___features___title = 'childMarkdownRemark.frontmatter.features.title',
  childMarkdownRemark___frontmatter___features___description = 'childMarkdownRemark.frontmatter.features.description',
  childMarkdownRemark___frontmatter___features___buttonText = 'childMarkdownRemark.frontmatter.features.buttonText',
  childMarkdownRemark___frontmatter___features___buttonLink = 'childMarkdownRemark.frontmatter.features.buttonLink',
  childMarkdownRemark___frontmatter___tagLine = 'childMarkdownRemark.frontmatter.tagLine',
  childMarkdownRemark___frontmatter___eventDate = 'childMarkdownRemark.frontmatter.eventDate',
  childMarkdownRemark___frontmatter___price = 'childMarkdownRemark.frontmatter.price',
  childMarkdownRemark___frontmatter___signUpEmail = 'childMarkdownRemark.frontmatter.signUpEmail',
  childMarkdownRemark___frontmatter___leader = 'childMarkdownRemark.frontmatter.leader',
  childMarkdownRemark___frontmatter___people = 'childMarkdownRemark.frontmatter.people',
  childMarkdownRemark___frontmatter___people___name = 'childMarkdownRemark.frontmatter.people.name',
  childMarkdownRemark___frontmatter___people___title = 'childMarkdownRemark.frontmatter.people.title',
  childMarkdownRemark___frontmatter___people___photo = 'childMarkdownRemark.frontmatter.people.photo',
  childMarkdownRemark___frontmatter___people___headshot_position = 'childMarkdownRemark.frontmatter.people.headshot_position',
  childMarkdownRemark___frontmatter___findOutMoreLink = 'childMarkdownRemark.frontmatter.findOutMoreLink',
  childMarkdownRemark___frontmatter___style_classes = 'childMarkdownRemark.frontmatter.style_classes',
  childMarkdownRemark___frontmatter___imageObjectPosition = 'childMarkdownRemark.frontmatter.imageObjectPosition',
  childMarkdownRemark___frontmatter___fullBleed = 'childMarkdownRemark.frontmatter.fullBleed',
  childMarkdownRemark___excerpt = 'childMarkdownRemark.excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___fileAbsolutePath = 'childMarkdownRemark.fileAbsolutePath',
  childMarkdownRemark___html = 'childMarkdownRemark.html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark.htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark.excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark.headings',
  childMarkdownRemark___headings___value = 'childMarkdownRemark.headings.value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark.headings.depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark.timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark.tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark.wordCount.paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark.wordCount.sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark.wordCount.words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark.parent.id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark.parent.parent.id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark.parent.parent.children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark.parent.children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark.parent.children.id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark.parent.children.children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark.parent.internal.content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark.parent.internal.contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark.parent.internal.description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark.parent.internal.fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark.parent.internal.ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark.parent.internal.mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark.parent.internal.owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark.parent.internal.type',
  childMarkdownRemark___children = 'childMarkdownRemark.children',
  childMarkdownRemark___children___id = 'childMarkdownRemark.children.id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark.children.parent.id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark.children.parent.children',
  childMarkdownRemark___children___children = 'childMarkdownRemark.children.children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark.children.children.id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark.children.children.children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark.children.internal.content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark.children.internal.contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark.children.internal.description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark.children.internal.fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark.children.internal.ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark.children.internal.mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark.children.internal.owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark.children.internal.type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark.internal.content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark.internal.contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark.internal.description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark.internal.fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark.internal.ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark.internal.mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark.internal.owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark.internal.type',
  childMarkdownRemark___childFrontmatterMarkdownFile___id = 'childMarkdownRemark.childFrontmatterMarkdownFile.id',
  childMarkdownRemark___childFrontmatterMarkdownFile___parent___id = 'childMarkdownRemark.childFrontmatterMarkdownFile.parent.id',
  childMarkdownRemark___childFrontmatterMarkdownFile___parent___children = 'childMarkdownRemark.childFrontmatterMarkdownFile.parent.children',
  childMarkdownRemark___childFrontmatterMarkdownFile___children = 'childMarkdownRemark.childFrontmatterMarkdownFile.children',
  childMarkdownRemark___childFrontmatterMarkdownFile___children___id = 'childMarkdownRemark.childFrontmatterMarkdownFile.children.id',
  childMarkdownRemark___childFrontmatterMarkdownFile___children___children = 'childMarkdownRemark.childFrontmatterMarkdownFile.children.children',
  childMarkdownRemark___childFrontmatterMarkdownFile___internal___content = 'childMarkdownRemark.childFrontmatterMarkdownFile.internal.content',
  childMarkdownRemark___childFrontmatterMarkdownFile___internal___contentDigest = 'childMarkdownRemark.childFrontmatterMarkdownFile.internal.contentDigest',
  childMarkdownRemark___childFrontmatterMarkdownFile___internal___description = 'childMarkdownRemark.childFrontmatterMarkdownFile.internal.description',
  childMarkdownRemark___childFrontmatterMarkdownFile___internal___fieldOwners = 'childMarkdownRemark.childFrontmatterMarkdownFile.internal.fieldOwners',
  childMarkdownRemark___childFrontmatterMarkdownFile___internal___ignoreType = 'childMarkdownRemark.childFrontmatterMarkdownFile.internal.ignoreType',
  childMarkdownRemark___childFrontmatterMarkdownFile___internal___mediaType = 'childMarkdownRemark.childFrontmatterMarkdownFile.internal.mediaType',
  childMarkdownRemark___childFrontmatterMarkdownFile___internal___owner = 'childMarkdownRemark.childFrontmatterMarkdownFile.internal.owner',
  childMarkdownRemark___childFrontmatterMarkdownFile___internal___type = 'childMarkdownRemark.childFrontmatterMarkdownFile.internal.type',
  childMarkdownRemark___childFrontmatterMarkdownFile___sourceInstanceName = 'childMarkdownRemark.childFrontmatterMarkdownFile.sourceInstanceName',
  childMarkdownRemark___childFrontmatterMarkdownFile___absolutePath = 'childMarkdownRemark.childFrontmatterMarkdownFile.absolutePath',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___sourceInstanceName = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.sourceInstanceName',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___absolutePath = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.absolutePath',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___relativePath = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.relativePath',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___extension = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.extension',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___size = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.size',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___prettySize = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.prettySize',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___modifiedTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.modifiedTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___accessTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.accessTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___changeTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.changeTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___birthTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.birthTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___root = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.root',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___dir = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.dir',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___base = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.base',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___ext = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.ext',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___name = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.name',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___relativeDirectory = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.relativeDirectory',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___dev = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.dev',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___mode = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.mode',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___nlink = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.nlink',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___uid = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.uid',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___gid = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.gid',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___rdev = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.rdev',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___ino = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.ino',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___atimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.atimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___mtimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.mtimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___ctimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.ctimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___atime = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.atime',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___mtime = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.mtime',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___ctime = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.ctime',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___birthtime = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.birthtime',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___birthtimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.birthtimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___blksize = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.blksize',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___blocks = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.blocks',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___publicURL = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.publicURL',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___id = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.id',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___children = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.children',
  childMarkdownRemark___childFrontmatterMarkdownFile___extension = 'childMarkdownRemark.childFrontmatterMarkdownFile.extension',
  childMarkdownRemark___childFrontmatterMarkdownFile___size = 'childMarkdownRemark.childFrontmatterMarkdownFile.size',
  childMarkdownRemark___childFrontmatterMarkdownFile___prettySize = 'childMarkdownRemark.childFrontmatterMarkdownFile.prettySize',
  childMarkdownRemark___childFrontmatterMarkdownFile___modifiedTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.modifiedTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___accessTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.accessTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___changeTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.changeTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___birthTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.birthTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___root = 'childMarkdownRemark.childFrontmatterMarkdownFile.root',
  childMarkdownRemark___childFrontmatterMarkdownFile___dir = 'childMarkdownRemark.childFrontmatterMarkdownFile.dir',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___sourceInstanceName = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.sourceInstanceName',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___absolutePath = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.absolutePath',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___relativePath = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.relativePath',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___extension = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.extension',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___size = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.size',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___prettySize = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.prettySize',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___modifiedTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.modifiedTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___accessTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.accessTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___changeTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.changeTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___birthTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.birthTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___root = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.root',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___dir = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.dir',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___base = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.base',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___ext = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.ext',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___name = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.name',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___relativeDirectory = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.relativeDirectory',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___dev = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.dev',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___mode = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.mode',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___nlink = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.nlink',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___uid = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.uid',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___gid = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.gid',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___rdev = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.rdev',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___ino = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.ino',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___atimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.atimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___mtimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.mtimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___ctimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.ctimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___atime = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.atime',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___mtime = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.mtime',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___ctime = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.ctime',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___birthtime = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.birthtime',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___birthtimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.birthtimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___blksize = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.blksize',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___blocks = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.blocks',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___publicURL = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.publicURL',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___id = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.id',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___children = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.children',
  childMarkdownRemark___childFrontmatterMarkdownFile___ext = 'childMarkdownRemark.childFrontmatterMarkdownFile.ext',
  childMarkdownRemark___childFrontmatterMarkdownFile___name = 'childMarkdownRemark.childFrontmatterMarkdownFile.name',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativeDirectory = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativeDirectory',
  childMarkdownRemark___childFrontmatterMarkdownFile___dev = 'childMarkdownRemark.childFrontmatterMarkdownFile.dev',
  childMarkdownRemark___childFrontmatterMarkdownFile___mode = 'childMarkdownRemark.childFrontmatterMarkdownFile.mode',
  childMarkdownRemark___childFrontmatterMarkdownFile___nlink = 'childMarkdownRemark.childFrontmatterMarkdownFile.nlink',
  childMarkdownRemark___childFrontmatterMarkdownFile___uid = 'childMarkdownRemark.childFrontmatterMarkdownFile.uid',
  childMarkdownRemark___childFrontmatterMarkdownFile___gid = 'childMarkdownRemark.childFrontmatterMarkdownFile.gid',
  childMarkdownRemark___childFrontmatterMarkdownFile___rdev = 'childMarkdownRemark.childFrontmatterMarkdownFile.rdev',
  childMarkdownRemark___childFrontmatterMarkdownFile___blksize = 'childMarkdownRemark.childFrontmatterMarkdownFile.blksize',
  childMarkdownRemark___childFrontmatterMarkdownFile___ino = 'childMarkdownRemark.childFrontmatterMarkdownFile.ino',
  childMarkdownRemark___childFrontmatterMarkdownFile___blocks = 'childMarkdownRemark.childFrontmatterMarkdownFile.blocks',
  childMarkdownRemark___childFrontmatterMarkdownFile___atimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.atimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___mtimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.mtimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___ctimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.ctimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___birthtimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.birthtimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___atime = 'childMarkdownRemark.childFrontmatterMarkdownFile.atime',
  childMarkdownRemark___childFrontmatterMarkdownFile___mtime = 'childMarkdownRemark.childFrontmatterMarkdownFile.mtime',
  childMarkdownRemark___childFrontmatterMarkdownFile___ctime = 'childMarkdownRemark.childFrontmatterMarkdownFile.ctime',
  childMarkdownRemark___childFrontmatterMarkdownFile___birthtime = 'childMarkdownRemark.childFrontmatterMarkdownFile.birthtime',
  childMarkdownRemark___childFrontmatterMarkdownFile___frontmatterField = 'childMarkdownRemark.childFrontmatterMarkdownFile.frontmatterField',
  childMarkdownRemark___childFrontmatterMarkdownFile___frontmatterValue = 'childMarkdownRemark.childFrontmatterMarkdownFile.frontmatterValue',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___id = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.id',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___excerpt = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.excerpt',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___fileAbsolutePath = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.fileAbsolutePath',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___html = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.html',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___htmlAst = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.htmlAst',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___excerptAst = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.excerptAst',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___headings = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.headings',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___timeToRead = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.timeToRead',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___tableOfContents = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.tableOfContents',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___children = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.children'
}

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type FrontmatterMarkdownFile = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly sourceInstanceName: Maybe<Scalars['String']>;
  readonly absolutePath: Maybe<Scalars['String']>;
  readonly relativePath: Maybe<File>;
  readonly extension: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Int']>;
  readonly prettySize: Maybe<Scalars['String']>;
  readonly modifiedTime: Maybe<Scalars['Date']>;
  readonly accessTime: Maybe<Scalars['Date']>;
  readonly changeTime: Maybe<Scalars['Date']>;
  readonly birthTime: Maybe<Scalars['Date']>;
  readonly root: Maybe<Scalars['String']>;
  readonly dir: Maybe<Scalars['String']>;
  readonly base: Maybe<File>;
  readonly ext: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly relativeDirectory: Maybe<Scalars['String']>;
  readonly dev: Maybe<Scalars['Int']>;
  readonly mode: Maybe<Scalars['Int']>;
  readonly nlink: Maybe<Scalars['Int']>;
  readonly uid: Maybe<Scalars['Int']>;
  readonly gid: Maybe<Scalars['Int']>;
  readonly rdev: Maybe<Scalars['Int']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly ino: Maybe<Scalars['Float']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly atimeMs: Maybe<Scalars['Float']>;
  readonly mtimeMs: Maybe<Scalars['Float']>;
  readonly ctimeMs: Maybe<Scalars['Float']>;
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly atime: Maybe<Scalars['Date']>;
  readonly mtime: Maybe<Scalars['Date']>;
  readonly ctime: Maybe<Scalars['Date']>;
  readonly birthtime: Maybe<Scalars['Date']>;
  readonly frontmatterField: Maybe<Scalars['String']>;
  readonly frontmatterValue: Maybe<Scalars['String']>;
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};


type FrontmatterMarkdownFile_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type FrontmatterMarkdownFile_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type FrontmatterMarkdownFile_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type FrontmatterMarkdownFile_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type FrontmatterMarkdownFile_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type FrontmatterMarkdownFile_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type FrontmatterMarkdownFile_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type FrontmatterMarkdownFile_birthtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type FrontmatterMarkdownFileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FrontmatterMarkdownFileEdge>;
  readonly nodes: ReadonlyArray<FrontmatterMarkdownFile>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FrontmatterMarkdownFileGroupConnection>;
};


type FrontmatterMarkdownFileConnection_distinctArgs = {
  field: FrontmatterMarkdownFileFieldsEnum;
};


type FrontmatterMarkdownFileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FrontmatterMarkdownFileFieldsEnum;
};

type FrontmatterMarkdownFileEdge = {
  readonly next: Maybe<FrontmatterMarkdownFile>;
  readonly node: FrontmatterMarkdownFile;
  readonly previous: Maybe<FrontmatterMarkdownFile>;
};

enum FrontmatterMarkdownFileFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath___sourceInstanceName = 'relativePath.sourceInstanceName',
  relativePath___absolutePath = 'relativePath.absolutePath',
  relativePath___relativePath = 'relativePath.relativePath',
  relativePath___extension = 'relativePath.extension',
  relativePath___size = 'relativePath.size',
  relativePath___prettySize = 'relativePath.prettySize',
  relativePath___modifiedTime = 'relativePath.modifiedTime',
  relativePath___accessTime = 'relativePath.accessTime',
  relativePath___changeTime = 'relativePath.changeTime',
  relativePath___birthTime = 'relativePath.birthTime',
  relativePath___root = 'relativePath.root',
  relativePath___dir = 'relativePath.dir',
  relativePath___base = 'relativePath.base',
  relativePath___ext = 'relativePath.ext',
  relativePath___name = 'relativePath.name',
  relativePath___relativeDirectory = 'relativePath.relativeDirectory',
  relativePath___dev = 'relativePath.dev',
  relativePath___mode = 'relativePath.mode',
  relativePath___nlink = 'relativePath.nlink',
  relativePath___uid = 'relativePath.uid',
  relativePath___gid = 'relativePath.gid',
  relativePath___rdev = 'relativePath.rdev',
  relativePath___ino = 'relativePath.ino',
  relativePath___atimeMs = 'relativePath.atimeMs',
  relativePath___mtimeMs = 'relativePath.mtimeMs',
  relativePath___ctimeMs = 'relativePath.ctimeMs',
  relativePath___atime = 'relativePath.atime',
  relativePath___mtime = 'relativePath.mtime',
  relativePath___ctime = 'relativePath.ctime',
  relativePath___birthtime = 'relativePath.birthtime',
  relativePath___birthtimeMs = 'relativePath.birthtimeMs',
  relativePath___blksize = 'relativePath.blksize',
  relativePath___blocks = 'relativePath.blocks',
  relativePath___publicURL = 'relativePath.publicURL',
  relativePath___childImageSharp___fixed___base64 = 'relativePath.childImageSharp.fixed.base64',
  relativePath___childImageSharp___fixed___tracedSVG = 'relativePath.childImageSharp.fixed.tracedSVG',
  relativePath___childImageSharp___fixed___aspectRatio = 'relativePath.childImageSharp.fixed.aspectRatio',
  relativePath___childImageSharp___fixed___width = 'relativePath.childImageSharp.fixed.width',
  relativePath___childImageSharp___fixed___height = 'relativePath.childImageSharp.fixed.height',
  relativePath___childImageSharp___fixed___src = 'relativePath.childImageSharp.fixed.src',
  relativePath___childImageSharp___fixed___srcSet = 'relativePath.childImageSharp.fixed.srcSet',
  relativePath___childImageSharp___fixed___srcWebp = 'relativePath.childImageSharp.fixed.srcWebp',
  relativePath___childImageSharp___fixed___srcSetWebp = 'relativePath.childImageSharp.fixed.srcSetWebp',
  relativePath___childImageSharp___fixed___originalName = 'relativePath.childImageSharp.fixed.originalName',
  relativePath___childImageSharp___resolutions___base64 = 'relativePath.childImageSharp.resolutions.base64',
  relativePath___childImageSharp___resolutions___tracedSVG = 'relativePath.childImageSharp.resolutions.tracedSVG',
  relativePath___childImageSharp___resolutions___aspectRatio = 'relativePath.childImageSharp.resolutions.aspectRatio',
  relativePath___childImageSharp___resolutions___width = 'relativePath.childImageSharp.resolutions.width',
  relativePath___childImageSharp___resolutions___height = 'relativePath.childImageSharp.resolutions.height',
  relativePath___childImageSharp___resolutions___src = 'relativePath.childImageSharp.resolutions.src',
  relativePath___childImageSharp___resolutions___srcSet = 'relativePath.childImageSharp.resolutions.srcSet',
  relativePath___childImageSharp___resolutions___srcWebp = 'relativePath.childImageSharp.resolutions.srcWebp',
  relativePath___childImageSharp___resolutions___srcSetWebp = 'relativePath.childImageSharp.resolutions.srcSetWebp',
  relativePath___childImageSharp___resolutions___originalName = 'relativePath.childImageSharp.resolutions.originalName',
  relativePath___childImageSharp___fluid___base64 = 'relativePath.childImageSharp.fluid.base64',
  relativePath___childImageSharp___fluid___tracedSVG = 'relativePath.childImageSharp.fluid.tracedSVG',
  relativePath___childImageSharp___fluid___aspectRatio = 'relativePath.childImageSharp.fluid.aspectRatio',
  relativePath___childImageSharp___fluid___src = 'relativePath.childImageSharp.fluid.src',
  relativePath___childImageSharp___fluid___srcSet = 'relativePath.childImageSharp.fluid.srcSet',
  relativePath___childImageSharp___fluid___srcWebp = 'relativePath.childImageSharp.fluid.srcWebp',
  relativePath___childImageSharp___fluid___srcSetWebp = 'relativePath.childImageSharp.fluid.srcSetWebp',
  relativePath___childImageSharp___fluid___sizes = 'relativePath.childImageSharp.fluid.sizes',
  relativePath___childImageSharp___fluid___originalImg = 'relativePath.childImageSharp.fluid.originalImg',
  relativePath___childImageSharp___fluid___originalName = 'relativePath.childImageSharp.fluid.originalName',
  relativePath___childImageSharp___fluid___presentationWidth = 'relativePath.childImageSharp.fluid.presentationWidth',
  relativePath___childImageSharp___fluid___presentationHeight = 'relativePath.childImageSharp.fluid.presentationHeight',
  relativePath___childImageSharp___sizes___base64 = 'relativePath.childImageSharp.sizes.base64',
  relativePath___childImageSharp___sizes___tracedSVG = 'relativePath.childImageSharp.sizes.tracedSVG',
  relativePath___childImageSharp___sizes___aspectRatio = 'relativePath.childImageSharp.sizes.aspectRatio',
  relativePath___childImageSharp___sizes___src = 'relativePath.childImageSharp.sizes.src',
  relativePath___childImageSharp___sizes___srcSet = 'relativePath.childImageSharp.sizes.srcSet',
  relativePath___childImageSharp___sizes___srcWebp = 'relativePath.childImageSharp.sizes.srcWebp',
  relativePath___childImageSharp___sizes___srcSetWebp = 'relativePath.childImageSharp.sizes.srcSetWebp',
  relativePath___childImageSharp___sizes___sizes = 'relativePath.childImageSharp.sizes.sizes',
  relativePath___childImageSharp___sizes___originalImg = 'relativePath.childImageSharp.sizes.originalImg',
  relativePath___childImageSharp___sizes___originalName = 'relativePath.childImageSharp.sizes.originalName',
  relativePath___childImageSharp___sizes___presentationWidth = 'relativePath.childImageSharp.sizes.presentationWidth',
  relativePath___childImageSharp___sizes___presentationHeight = 'relativePath.childImageSharp.sizes.presentationHeight',
  relativePath___childImageSharp___original___width = 'relativePath.childImageSharp.original.width',
  relativePath___childImageSharp___original___height = 'relativePath.childImageSharp.original.height',
  relativePath___childImageSharp___original___src = 'relativePath.childImageSharp.original.src',
  relativePath___childImageSharp___resize___src = 'relativePath.childImageSharp.resize.src',
  relativePath___childImageSharp___resize___tracedSVG = 'relativePath.childImageSharp.resize.tracedSVG',
  relativePath___childImageSharp___resize___width = 'relativePath.childImageSharp.resize.width',
  relativePath___childImageSharp___resize___height = 'relativePath.childImageSharp.resize.height',
  relativePath___childImageSharp___resize___aspectRatio = 'relativePath.childImageSharp.resize.aspectRatio',
  relativePath___childImageSharp___resize___originalName = 'relativePath.childImageSharp.resize.originalName',
  relativePath___childImageSharp___id = 'relativePath.childImageSharp.id',
  relativePath___childImageSharp___parent___id = 'relativePath.childImageSharp.parent.id',
  relativePath___childImageSharp___parent___children = 'relativePath.childImageSharp.parent.children',
  relativePath___childImageSharp___children = 'relativePath.childImageSharp.children',
  relativePath___childImageSharp___children___id = 'relativePath.childImageSharp.children.id',
  relativePath___childImageSharp___children___children = 'relativePath.childImageSharp.children.children',
  relativePath___childImageSharp___internal___content = 'relativePath.childImageSharp.internal.content',
  relativePath___childImageSharp___internal___contentDigest = 'relativePath.childImageSharp.internal.contentDigest',
  relativePath___childImageSharp___internal___description = 'relativePath.childImageSharp.internal.description',
  relativePath___childImageSharp___internal___fieldOwners = 'relativePath.childImageSharp.internal.fieldOwners',
  relativePath___childImageSharp___internal___ignoreType = 'relativePath.childImageSharp.internal.ignoreType',
  relativePath___childImageSharp___internal___mediaType = 'relativePath.childImageSharp.internal.mediaType',
  relativePath___childImageSharp___internal___owner = 'relativePath.childImageSharp.internal.owner',
  relativePath___childImageSharp___internal___type = 'relativePath.childImageSharp.internal.type',
  relativePath___id = 'relativePath.id',
  relativePath___parent___id = 'relativePath.parent.id',
  relativePath___parent___parent___id = 'relativePath.parent.parent.id',
  relativePath___parent___parent___children = 'relativePath.parent.parent.children',
  relativePath___parent___children = 'relativePath.parent.children',
  relativePath___parent___children___id = 'relativePath.parent.children.id',
  relativePath___parent___children___children = 'relativePath.parent.children.children',
  relativePath___parent___internal___content = 'relativePath.parent.internal.content',
  relativePath___parent___internal___contentDigest = 'relativePath.parent.internal.contentDigest',
  relativePath___parent___internal___description = 'relativePath.parent.internal.description',
  relativePath___parent___internal___fieldOwners = 'relativePath.parent.internal.fieldOwners',
  relativePath___parent___internal___ignoreType = 'relativePath.parent.internal.ignoreType',
  relativePath___parent___internal___mediaType = 'relativePath.parent.internal.mediaType',
  relativePath___parent___internal___owner = 'relativePath.parent.internal.owner',
  relativePath___parent___internal___type = 'relativePath.parent.internal.type',
  relativePath___children = 'relativePath.children',
  relativePath___children___id = 'relativePath.children.id',
  relativePath___children___parent___id = 'relativePath.children.parent.id',
  relativePath___children___parent___children = 'relativePath.children.parent.children',
  relativePath___children___children = 'relativePath.children.children',
  relativePath___children___children___id = 'relativePath.children.children.id',
  relativePath___children___children___children = 'relativePath.children.children.children',
  relativePath___children___internal___content = 'relativePath.children.internal.content',
  relativePath___children___internal___contentDigest = 'relativePath.children.internal.contentDigest',
  relativePath___children___internal___description = 'relativePath.children.internal.description',
  relativePath___children___internal___fieldOwners = 'relativePath.children.internal.fieldOwners',
  relativePath___children___internal___ignoreType = 'relativePath.children.internal.ignoreType',
  relativePath___children___internal___mediaType = 'relativePath.children.internal.mediaType',
  relativePath___children___internal___owner = 'relativePath.children.internal.owner',
  relativePath___children___internal___type = 'relativePath.children.internal.type',
  relativePath___internal___content = 'relativePath.internal.content',
  relativePath___internal___contentDigest = 'relativePath.internal.contentDigest',
  relativePath___internal___description = 'relativePath.internal.description',
  relativePath___internal___fieldOwners = 'relativePath.internal.fieldOwners',
  relativePath___internal___ignoreType = 'relativePath.internal.ignoreType',
  relativePath___internal___mediaType = 'relativePath.internal.mediaType',
  relativePath___internal___owner = 'relativePath.internal.owner',
  relativePath___internal___type = 'relativePath.internal.type',
  relativePath___childMarkdownRemark___id = 'relativePath.childMarkdownRemark.id',
  relativePath___childMarkdownRemark___frontmatter___title = 'relativePath.childMarkdownRemark.frontmatter.title',
  relativePath___childMarkdownRemark___frontmatter___path = 'relativePath.childMarkdownRemark.frontmatter.path',
  relativePath___childMarkdownRemark___frontmatter___showInFooter = 'relativePath.childMarkdownRemark.frontmatter.showInFooter',
  relativePath___childMarkdownRemark___frontmatter___headerColour = 'relativePath.childMarkdownRemark.frontmatter.headerColour',
  relativePath___childMarkdownRemark___frontmatter___template = 'relativePath.childMarkdownRemark.frontmatter.template',
  relativePath___childMarkdownRemark___frontmatter___showInMenu = 'relativePath.childMarkdownRemark.frontmatter.showInMenu',
  relativePath___childMarkdownRemark___frontmatter___menuOrder = 'relativePath.childMarkdownRemark.frontmatter.menuOrder',
  relativePath___childMarkdownRemark___frontmatter___overlayCaption = 'relativePath.childMarkdownRemark.frontmatter.overlayCaption',
  relativePath___childMarkdownRemark___frontmatter___captionPosition = 'relativePath.childMarkdownRemark.frontmatter.captionPosition',
  relativePath___childMarkdownRemark___frontmatter___findOutMoreText = 'relativePath.childMarkdownRemark.frontmatter.findOutMoreText',
  relativePath___childMarkdownRemark___frontmatter___signupPlaceholder = 'relativePath.childMarkdownRemark.frontmatter.signupPlaceholder',
  relativePath___childMarkdownRemark___frontmatter___action = 'relativePath.childMarkdownRemark.frontmatter.action',
  relativePath___childMarkdownRemark___frontmatter___hiddenValue = 'relativePath.childMarkdownRemark.frontmatter.hiddenValue',
  relativePath___childMarkdownRemark___frontmatter___layout = 'relativePath.childMarkdownRemark.frontmatter.layout',
  relativePath___childMarkdownRemark___frontmatter___section = 'relativePath.childMarkdownRemark.frontmatter.section',
  relativePath___childMarkdownRemark___frontmatter___carouselImages = 'relativePath.childMarkdownRemark.frontmatter.carouselImages',
  relativePath___childMarkdownRemark___frontmatter___sitemap = 'relativePath.childMarkdownRemark.frontmatter.sitemap',
  relativePath___childMarkdownRemark___frontmatter___image_alignment_classes = 'relativePath.childMarkdownRemark.frontmatter.image_alignment_classes',
  relativePath___childMarkdownRemark___frontmatter___itunesPodcastURL = 'relativePath.childMarkdownRemark.frontmatter.itunesPodcastURL',
  relativePath___childMarkdownRemark___frontmatter___podcastURL = 'relativePath.childMarkdownRemark.frontmatter.podcastURL',
  relativePath___childMarkdownRemark___frontmatter___iosAppStoreLink = 'relativePath.childMarkdownRemark.frontmatter.iosAppStoreLink',
  relativePath___childMarkdownRemark___frontmatter___playStoreLink = 'relativePath.childMarkdownRemark.frontmatter.playStoreLink',
  relativePath___childMarkdownRemark___frontmatter___mobileImage = 'relativePath.childMarkdownRemark.frontmatter.mobileImage',
  relativePath___childMarkdownRemark___frontmatter___releases = 'relativePath.childMarkdownRemark.frontmatter.releases',
  relativePath___childMarkdownRemark___frontmatter___resources = 'relativePath.childMarkdownRemark.frontmatter.resources',
  relativePath___childMarkdownRemark___frontmatter___dayOfWeek = 'relativePath.childMarkdownRemark.frontmatter.dayOfWeek',
  relativePath___childMarkdownRemark___frontmatter___type = 'relativePath.childMarkdownRemark.frontmatter.type',
  relativePath___childMarkdownRemark___frontmatter___time = 'relativePath.childMarkdownRemark.frontmatter.time',
  relativePath___childMarkdownRemark___frontmatter___timeOfDay = 'relativePath.childMarkdownRemark.frontmatter.timeOfDay',
  relativePath___childMarkdownRemark___frontmatter___name = 'relativePath.childMarkdownRemark.frontmatter.name',
  relativePath___childMarkdownRemark___frontmatter___status = 'relativePath.childMarkdownRemark.frontmatter.status',
  relativePath___childMarkdownRemark___frontmatter___backgroundColour = 'relativePath.childMarkdownRemark.frontmatter.backgroundColour',
  relativePath___childMarkdownRemark___frontmatter___textColour = 'relativePath.childMarkdownRemark.frontmatter.textColour',
  relativePath___childMarkdownRemark___frontmatter___eventType = 'relativePath.childMarkdownRemark.frontmatter.eventType',
  relativePath___childMarkdownRemark___frontmatter___events = 'relativePath.childMarkdownRemark.frontmatter.events',
  relativePath___childMarkdownRemark___frontmatter___order = 'relativePath.childMarkdownRemark.frontmatter.order',
  relativePath___childMarkdownRemark___frontmatter___lastUpdated = 'relativePath.childMarkdownRemark.frontmatter.lastUpdated',
  relativePath___childMarkdownRemark___frontmatter___features = 'relativePath.childMarkdownRemark.frontmatter.features',
  relativePath___childMarkdownRemark___frontmatter___tagLine = 'relativePath.childMarkdownRemark.frontmatter.tagLine',
  relativePath___childMarkdownRemark___frontmatter___eventDate = 'relativePath.childMarkdownRemark.frontmatter.eventDate',
  relativePath___childMarkdownRemark___frontmatter___price = 'relativePath.childMarkdownRemark.frontmatter.price',
  relativePath___childMarkdownRemark___frontmatter___signUpEmail = 'relativePath.childMarkdownRemark.frontmatter.signUpEmail',
  relativePath___childMarkdownRemark___frontmatter___leader = 'relativePath.childMarkdownRemark.frontmatter.leader',
  relativePath___childMarkdownRemark___frontmatter___people = 'relativePath.childMarkdownRemark.frontmatter.people',
  relativePath___childMarkdownRemark___frontmatter___findOutMoreLink = 'relativePath.childMarkdownRemark.frontmatter.findOutMoreLink',
  relativePath___childMarkdownRemark___frontmatter___style_classes = 'relativePath.childMarkdownRemark.frontmatter.style_classes',
  relativePath___childMarkdownRemark___frontmatter___imageObjectPosition = 'relativePath.childMarkdownRemark.frontmatter.imageObjectPosition',
  relativePath___childMarkdownRemark___frontmatter___fullBleed = 'relativePath.childMarkdownRemark.frontmatter.fullBleed',
  relativePath___childMarkdownRemark___excerpt = 'relativePath.childMarkdownRemark.excerpt',
  relativePath___childMarkdownRemark___rawMarkdownBody = 'relativePath.childMarkdownRemark.rawMarkdownBody',
  relativePath___childMarkdownRemark___fileAbsolutePath = 'relativePath.childMarkdownRemark.fileAbsolutePath',
  relativePath___childMarkdownRemark___html = 'relativePath.childMarkdownRemark.html',
  relativePath___childMarkdownRemark___htmlAst = 'relativePath.childMarkdownRemark.htmlAst',
  relativePath___childMarkdownRemark___excerptAst = 'relativePath.childMarkdownRemark.excerptAst',
  relativePath___childMarkdownRemark___headings = 'relativePath.childMarkdownRemark.headings',
  relativePath___childMarkdownRemark___headings___value = 'relativePath.childMarkdownRemark.headings.value',
  relativePath___childMarkdownRemark___headings___depth = 'relativePath.childMarkdownRemark.headings.depth',
  relativePath___childMarkdownRemark___timeToRead = 'relativePath.childMarkdownRemark.timeToRead',
  relativePath___childMarkdownRemark___tableOfContents = 'relativePath.childMarkdownRemark.tableOfContents',
  relativePath___childMarkdownRemark___wordCount___paragraphs = 'relativePath.childMarkdownRemark.wordCount.paragraphs',
  relativePath___childMarkdownRemark___wordCount___sentences = 'relativePath.childMarkdownRemark.wordCount.sentences',
  relativePath___childMarkdownRemark___wordCount___words = 'relativePath.childMarkdownRemark.wordCount.words',
  relativePath___childMarkdownRemark___parent___id = 'relativePath.childMarkdownRemark.parent.id',
  relativePath___childMarkdownRemark___parent___children = 'relativePath.childMarkdownRemark.parent.children',
  relativePath___childMarkdownRemark___children = 'relativePath.childMarkdownRemark.children',
  relativePath___childMarkdownRemark___children___id = 'relativePath.childMarkdownRemark.children.id',
  relativePath___childMarkdownRemark___children___children = 'relativePath.childMarkdownRemark.children.children',
  relativePath___childMarkdownRemark___internal___content = 'relativePath.childMarkdownRemark.internal.content',
  relativePath___childMarkdownRemark___internal___contentDigest = 'relativePath.childMarkdownRemark.internal.contentDigest',
  relativePath___childMarkdownRemark___internal___description = 'relativePath.childMarkdownRemark.internal.description',
  relativePath___childMarkdownRemark___internal___fieldOwners = 'relativePath.childMarkdownRemark.internal.fieldOwners',
  relativePath___childMarkdownRemark___internal___ignoreType = 'relativePath.childMarkdownRemark.internal.ignoreType',
  relativePath___childMarkdownRemark___internal___mediaType = 'relativePath.childMarkdownRemark.internal.mediaType',
  relativePath___childMarkdownRemark___internal___owner = 'relativePath.childMarkdownRemark.internal.owner',
  relativePath___childMarkdownRemark___internal___type = 'relativePath.childMarkdownRemark.internal.type',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___id = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.id',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___children = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.children',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___sourceInstanceName = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.sourceInstanceName',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___absolutePath = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.absolutePath',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___extension = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.extension',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___size = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.size',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___prettySize = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.prettySize',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___modifiedTime = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.modifiedTime',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___accessTime = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.accessTime',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___changeTime = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.changeTime',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___birthTime = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.birthTime',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___root = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.root',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___dir = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.dir',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___ext = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.ext',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___name = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.name',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___relativeDirectory = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.relativeDirectory',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___dev = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.dev',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___mode = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.mode',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___nlink = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.nlink',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___uid = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.uid',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___gid = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.gid',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___rdev = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.rdev',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___blksize = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.blksize',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___ino = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.ino',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___blocks = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.blocks',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___atimeMs = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.atimeMs',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___mtimeMs = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.mtimeMs',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___ctimeMs = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.ctimeMs',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___birthtimeMs = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.birthtimeMs',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___atime = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.atime',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___mtime = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.mtime',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___ctime = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.ctime',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___birthtime = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.birthtime',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___frontmatterField = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.frontmatterField',
  relativePath___childMarkdownRemark___childFrontmatterMarkdownFile___frontmatterValue = 'relativePath.childMarkdownRemark.childFrontmatterMarkdownFile.frontmatterValue',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base___sourceInstanceName = 'base.sourceInstanceName',
  base___absolutePath = 'base.absolutePath',
  base___relativePath = 'base.relativePath',
  base___extension = 'base.extension',
  base___size = 'base.size',
  base___prettySize = 'base.prettySize',
  base___modifiedTime = 'base.modifiedTime',
  base___accessTime = 'base.accessTime',
  base___changeTime = 'base.changeTime',
  base___birthTime = 'base.birthTime',
  base___root = 'base.root',
  base___dir = 'base.dir',
  base___base = 'base.base',
  base___ext = 'base.ext',
  base___name = 'base.name',
  base___relativeDirectory = 'base.relativeDirectory',
  base___dev = 'base.dev',
  base___mode = 'base.mode',
  base___nlink = 'base.nlink',
  base___uid = 'base.uid',
  base___gid = 'base.gid',
  base___rdev = 'base.rdev',
  base___ino = 'base.ino',
  base___atimeMs = 'base.atimeMs',
  base___mtimeMs = 'base.mtimeMs',
  base___ctimeMs = 'base.ctimeMs',
  base___atime = 'base.atime',
  base___mtime = 'base.mtime',
  base___ctime = 'base.ctime',
  base___birthtime = 'base.birthtime',
  base___birthtimeMs = 'base.birthtimeMs',
  base___blksize = 'base.blksize',
  base___blocks = 'base.blocks',
  base___publicURL = 'base.publicURL',
  base___childImageSharp___fixed___base64 = 'base.childImageSharp.fixed.base64',
  base___childImageSharp___fixed___tracedSVG = 'base.childImageSharp.fixed.tracedSVG',
  base___childImageSharp___fixed___aspectRatio = 'base.childImageSharp.fixed.aspectRatio',
  base___childImageSharp___fixed___width = 'base.childImageSharp.fixed.width',
  base___childImageSharp___fixed___height = 'base.childImageSharp.fixed.height',
  base___childImageSharp___fixed___src = 'base.childImageSharp.fixed.src',
  base___childImageSharp___fixed___srcSet = 'base.childImageSharp.fixed.srcSet',
  base___childImageSharp___fixed___srcWebp = 'base.childImageSharp.fixed.srcWebp',
  base___childImageSharp___fixed___srcSetWebp = 'base.childImageSharp.fixed.srcSetWebp',
  base___childImageSharp___fixed___originalName = 'base.childImageSharp.fixed.originalName',
  base___childImageSharp___resolutions___base64 = 'base.childImageSharp.resolutions.base64',
  base___childImageSharp___resolutions___tracedSVG = 'base.childImageSharp.resolutions.tracedSVG',
  base___childImageSharp___resolutions___aspectRatio = 'base.childImageSharp.resolutions.aspectRatio',
  base___childImageSharp___resolutions___width = 'base.childImageSharp.resolutions.width',
  base___childImageSharp___resolutions___height = 'base.childImageSharp.resolutions.height',
  base___childImageSharp___resolutions___src = 'base.childImageSharp.resolutions.src',
  base___childImageSharp___resolutions___srcSet = 'base.childImageSharp.resolutions.srcSet',
  base___childImageSharp___resolutions___srcWebp = 'base.childImageSharp.resolutions.srcWebp',
  base___childImageSharp___resolutions___srcSetWebp = 'base.childImageSharp.resolutions.srcSetWebp',
  base___childImageSharp___resolutions___originalName = 'base.childImageSharp.resolutions.originalName',
  base___childImageSharp___fluid___base64 = 'base.childImageSharp.fluid.base64',
  base___childImageSharp___fluid___tracedSVG = 'base.childImageSharp.fluid.tracedSVG',
  base___childImageSharp___fluid___aspectRatio = 'base.childImageSharp.fluid.aspectRatio',
  base___childImageSharp___fluid___src = 'base.childImageSharp.fluid.src',
  base___childImageSharp___fluid___srcSet = 'base.childImageSharp.fluid.srcSet',
  base___childImageSharp___fluid___srcWebp = 'base.childImageSharp.fluid.srcWebp',
  base___childImageSharp___fluid___srcSetWebp = 'base.childImageSharp.fluid.srcSetWebp',
  base___childImageSharp___fluid___sizes = 'base.childImageSharp.fluid.sizes',
  base___childImageSharp___fluid___originalImg = 'base.childImageSharp.fluid.originalImg',
  base___childImageSharp___fluid___originalName = 'base.childImageSharp.fluid.originalName',
  base___childImageSharp___fluid___presentationWidth = 'base.childImageSharp.fluid.presentationWidth',
  base___childImageSharp___fluid___presentationHeight = 'base.childImageSharp.fluid.presentationHeight',
  base___childImageSharp___sizes___base64 = 'base.childImageSharp.sizes.base64',
  base___childImageSharp___sizes___tracedSVG = 'base.childImageSharp.sizes.tracedSVG',
  base___childImageSharp___sizes___aspectRatio = 'base.childImageSharp.sizes.aspectRatio',
  base___childImageSharp___sizes___src = 'base.childImageSharp.sizes.src',
  base___childImageSharp___sizes___srcSet = 'base.childImageSharp.sizes.srcSet',
  base___childImageSharp___sizes___srcWebp = 'base.childImageSharp.sizes.srcWebp',
  base___childImageSharp___sizes___srcSetWebp = 'base.childImageSharp.sizes.srcSetWebp',
  base___childImageSharp___sizes___sizes = 'base.childImageSharp.sizes.sizes',
  base___childImageSharp___sizes___originalImg = 'base.childImageSharp.sizes.originalImg',
  base___childImageSharp___sizes___originalName = 'base.childImageSharp.sizes.originalName',
  base___childImageSharp___sizes___presentationWidth = 'base.childImageSharp.sizes.presentationWidth',
  base___childImageSharp___sizes___presentationHeight = 'base.childImageSharp.sizes.presentationHeight',
  base___childImageSharp___original___width = 'base.childImageSharp.original.width',
  base___childImageSharp___original___height = 'base.childImageSharp.original.height',
  base___childImageSharp___original___src = 'base.childImageSharp.original.src',
  base___childImageSharp___resize___src = 'base.childImageSharp.resize.src',
  base___childImageSharp___resize___tracedSVG = 'base.childImageSharp.resize.tracedSVG',
  base___childImageSharp___resize___width = 'base.childImageSharp.resize.width',
  base___childImageSharp___resize___height = 'base.childImageSharp.resize.height',
  base___childImageSharp___resize___aspectRatio = 'base.childImageSharp.resize.aspectRatio',
  base___childImageSharp___resize___originalName = 'base.childImageSharp.resize.originalName',
  base___childImageSharp___id = 'base.childImageSharp.id',
  base___childImageSharp___parent___id = 'base.childImageSharp.parent.id',
  base___childImageSharp___parent___children = 'base.childImageSharp.parent.children',
  base___childImageSharp___children = 'base.childImageSharp.children',
  base___childImageSharp___children___id = 'base.childImageSharp.children.id',
  base___childImageSharp___children___children = 'base.childImageSharp.children.children',
  base___childImageSharp___internal___content = 'base.childImageSharp.internal.content',
  base___childImageSharp___internal___contentDigest = 'base.childImageSharp.internal.contentDigest',
  base___childImageSharp___internal___description = 'base.childImageSharp.internal.description',
  base___childImageSharp___internal___fieldOwners = 'base.childImageSharp.internal.fieldOwners',
  base___childImageSharp___internal___ignoreType = 'base.childImageSharp.internal.ignoreType',
  base___childImageSharp___internal___mediaType = 'base.childImageSharp.internal.mediaType',
  base___childImageSharp___internal___owner = 'base.childImageSharp.internal.owner',
  base___childImageSharp___internal___type = 'base.childImageSharp.internal.type',
  base___id = 'base.id',
  base___parent___id = 'base.parent.id',
  base___parent___parent___id = 'base.parent.parent.id',
  base___parent___parent___children = 'base.parent.parent.children',
  base___parent___children = 'base.parent.children',
  base___parent___children___id = 'base.parent.children.id',
  base___parent___children___children = 'base.parent.children.children',
  base___parent___internal___content = 'base.parent.internal.content',
  base___parent___internal___contentDigest = 'base.parent.internal.contentDigest',
  base___parent___internal___description = 'base.parent.internal.description',
  base___parent___internal___fieldOwners = 'base.parent.internal.fieldOwners',
  base___parent___internal___ignoreType = 'base.parent.internal.ignoreType',
  base___parent___internal___mediaType = 'base.parent.internal.mediaType',
  base___parent___internal___owner = 'base.parent.internal.owner',
  base___parent___internal___type = 'base.parent.internal.type',
  base___children = 'base.children',
  base___children___id = 'base.children.id',
  base___children___parent___id = 'base.children.parent.id',
  base___children___parent___children = 'base.children.parent.children',
  base___children___children = 'base.children.children',
  base___children___children___id = 'base.children.children.id',
  base___children___children___children = 'base.children.children.children',
  base___children___internal___content = 'base.children.internal.content',
  base___children___internal___contentDigest = 'base.children.internal.contentDigest',
  base___children___internal___description = 'base.children.internal.description',
  base___children___internal___fieldOwners = 'base.children.internal.fieldOwners',
  base___children___internal___ignoreType = 'base.children.internal.ignoreType',
  base___children___internal___mediaType = 'base.children.internal.mediaType',
  base___children___internal___owner = 'base.children.internal.owner',
  base___children___internal___type = 'base.children.internal.type',
  base___internal___content = 'base.internal.content',
  base___internal___contentDigest = 'base.internal.contentDigest',
  base___internal___description = 'base.internal.description',
  base___internal___fieldOwners = 'base.internal.fieldOwners',
  base___internal___ignoreType = 'base.internal.ignoreType',
  base___internal___mediaType = 'base.internal.mediaType',
  base___internal___owner = 'base.internal.owner',
  base___internal___type = 'base.internal.type',
  base___childMarkdownRemark___id = 'base.childMarkdownRemark.id',
  base___childMarkdownRemark___frontmatter___title = 'base.childMarkdownRemark.frontmatter.title',
  base___childMarkdownRemark___frontmatter___path = 'base.childMarkdownRemark.frontmatter.path',
  base___childMarkdownRemark___frontmatter___showInFooter = 'base.childMarkdownRemark.frontmatter.showInFooter',
  base___childMarkdownRemark___frontmatter___headerColour = 'base.childMarkdownRemark.frontmatter.headerColour',
  base___childMarkdownRemark___frontmatter___template = 'base.childMarkdownRemark.frontmatter.template',
  base___childMarkdownRemark___frontmatter___showInMenu = 'base.childMarkdownRemark.frontmatter.showInMenu',
  base___childMarkdownRemark___frontmatter___menuOrder = 'base.childMarkdownRemark.frontmatter.menuOrder',
  base___childMarkdownRemark___frontmatter___overlayCaption = 'base.childMarkdownRemark.frontmatter.overlayCaption',
  base___childMarkdownRemark___frontmatter___captionPosition = 'base.childMarkdownRemark.frontmatter.captionPosition',
  base___childMarkdownRemark___frontmatter___findOutMoreText = 'base.childMarkdownRemark.frontmatter.findOutMoreText',
  base___childMarkdownRemark___frontmatter___signupPlaceholder = 'base.childMarkdownRemark.frontmatter.signupPlaceholder',
  base___childMarkdownRemark___frontmatter___action = 'base.childMarkdownRemark.frontmatter.action',
  base___childMarkdownRemark___frontmatter___hiddenValue = 'base.childMarkdownRemark.frontmatter.hiddenValue',
  base___childMarkdownRemark___frontmatter___layout = 'base.childMarkdownRemark.frontmatter.layout',
  base___childMarkdownRemark___frontmatter___section = 'base.childMarkdownRemark.frontmatter.section',
  base___childMarkdownRemark___frontmatter___carouselImages = 'base.childMarkdownRemark.frontmatter.carouselImages',
  base___childMarkdownRemark___frontmatter___sitemap = 'base.childMarkdownRemark.frontmatter.sitemap',
  base___childMarkdownRemark___frontmatter___image_alignment_classes = 'base.childMarkdownRemark.frontmatter.image_alignment_classes',
  base___childMarkdownRemark___frontmatter___itunesPodcastURL = 'base.childMarkdownRemark.frontmatter.itunesPodcastURL',
  base___childMarkdownRemark___frontmatter___podcastURL = 'base.childMarkdownRemark.frontmatter.podcastURL',
  base___childMarkdownRemark___frontmatter___iosAppStoreLink = 'base.childMarkdownRemark.frontmatter.iosAppStoreLink',
  base___childMarkdownRemark___frontmatter___playStoreLink = 'base.childMarkdownRemark.frontmatter.playStoreLink',
  base___childMarkdownRemark___frontmatter___mobileImage = 'base.childMarkdownRemark.frontmatter.mobileImage',
  base___childMarkdownRemark___frontmatter___releases = 'base.childMarkdownRemark.frontmatter.releases',
  base___childMarkdownRemark___frontmatter___resources = 'base.childMarkdownRemark.frontmatter.resources',
  base___childMarkdownRemark___frontmatter___dayOfWeek = 'base.childMarkdownRemark.frontmatter.dayOfWeek',
  base___childMarkdownRemark___frontmatter___type = 'base.childMarkdownRemark.frontmatter.type',
  base___childMarkdownRemark___frontmatter___time = 'base.childMarkdownRemark.frontmatter.time',
  base___childMarkdownRemark___frontmatter___timeOfDay = 'base.childMarkdownRemark.frontmatter.timeOfDay',
  base___childMarkdownRemark___frontmatter___name = 'base.childMarkdownRemark.frontmatter.name',
  base___childMarkdownRemark___frontmatter___status = 'base.childMarkdownRemark.frontmatter.status',
  base___childMarkdownRemark___frontmatter___backgroundColour = 'base.childMarkdownRemark.frontmatter.backgroundColour',
  base___childMarkdownRemark___frontmatter___textColour = 'base.childMarkdownRemark.frontmatter.textColour',
  base___childMarkdownRemark___frontmatter___eventType = 'base.childMarkdownRemark.frontmatter.eventType',
  base___childMarkdownRemark___frontmatter___events = 'base.childMarkdownRemark.frontmatter.events',
  base___childMarkdownRemark___frontmatter___order = 'base.childMarkdownRemark.frontmatter.order',
  base___childMarkdownRemark___frontmatter___lastUpdated = 'base.childMarkdownRemark.frontmatter.lastUpdated',
  base___childMarkdownRemark___frontmatter___features = 'base.childMarkdownRemark.frontmatter.features',
  base___childMarkdownRemark___frontmatter___tagLine = 'base.childMarkdownRemark.frontmatter.tagLine',
  base___childMarkdownRemark___frontmatter___eventDate = 'base.childMarkdownRemark.frontmatter.eventDate',
  base___childMarkdownRemark___frontmatter___price = 'base.childMarkdownRemark.frontmatter.price',
  base___childMarkdownRemark___frontmatter___signUpEmail = 'base.childMarkdownRemark.frontmatter.signUpEmail',
  base___childMarkdownRemark___frontmatter___leader = 'base.childMarkdownRemark.frontmatter.leader',
  base___childMarkdownRemark___frontmatter___people = 'base.childMarkdownRemark.frontmatter.people',
  base___childMarkdownRemark___frontmatter___findOutMoreLink = 'base.childMarkdownRemark.frontmatter.findOutMoreLink',
  base___childMarkdownRemark___frontmatter___style_classes = 'base.childMarkdownRemark.frontmatter.style_classes',
  base___childMarkdownRemark___frontmatter___imageObjectPosition = 'base.childMarkdownRemark.frontmatter.imageObjectPosition',
  base___childMarkdownRemark___frontmatter___fullBleed = 'base.childMarkdownRemark.frontmatter.fullBleed',
  base___childMarkdownRemark___excerpt = 'base.childMarkdownRemark.excerpt',
  base___childMarkdownRemark___rawMarkdownBody = 'base.childMarkdownRemark.rawMarkdownBody',
  base___childMarkdownRemark___fileAbsolutePath = 'base.childMarkdownRemark.fileAbsolutePath',
  base___childMarkdownRemark___html = 'base.childMarkdownRemark.html',
  base___childMarkdownRemark___htmlAst = 'base.childMarkdownRemark.htmlAst',
  base___childMarkdownRemark___excerptAst = 'base.childMarkdownRemark.excerptAst',
  base___childMarkdownRemark___headings = 'base.childMarkdownRemark.headings',
  base___childMarkdownRemark___headings___value = 'base.childMarkdownRemark.headings.value',
  base___childMarkdownRemark___headings___depth = 'base.childMarkdownRemark.headings.depth',
  base___childMarkdownRemark___timeToRead = 'base.childMarkdownRemark.timeToRead',
  base___childMarkdownRemark___tableOfContents = 'base.childMarkdownRemark.tableOfContents',
  base___childMarkdownRemark___wordCount___paragraphs = 'base.childMarkdownRemark.wordCount.paragraphs',
  base___childMarkdownRemark___wordCount___sentences = 'base.childMarkdownRemark.wordCount.sentences',
  base___childMarkdownRemark___wordCount___words = 'base.childMarkdownRemark.wordCount.words',
  base___childMarkdownRemark___parent___id = 'base.childMarkdownRemark.parent.id',
  base___childMarkdownRemark___parent___children = 'base.childMarkdownRemark.parent.children',
  base___childMarkdownRemark___children = 'base.childMarkdownRemark.children',
  base___childMarkdownRemark___children___id = 'base.childMarkdownRemark.children.id',
  base___childMarkdownRemark___children___children = 'base.childMarkdownRemark.children.children',
  base___childMarkdownRemark___internal___content = 'base.childMarkdownRemark.internal.content',
  base___childMarkdownRemark___internal___contentDigest = 'base.childMarkdownRemark.internal.contentDigest',
  base___childMarkdownRemark___internal___description = 'base.childMarkdownRemark.internal.description',
  base___childMarkdownRemark___internal___fieldOwners = 'base.childMarkdownRemark.internal.fieldOwners',
  base___childMarkdownRemark___internal___ignoreType = 'base.childMarkdownRemark.internal.ignoreType',
  base___childMarkdownRemark___internal___mediaType = 'base.childMarkdownRemark.internal.mediaType',
  base___childMarkdownRemark___internal___owner = 'base.childMarkdownRemark.internal.owner',
  base___childMarkdownRemark___internal___type = 'base.childMarkdownRemark.internal.type',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___id = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.id',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___children = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.children',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___sourceInstanceName = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.sourceInstanceName',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___absolutePath = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.absolutePath',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___extension = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.extension',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___size = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.size',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___prettySize = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.prettySize',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___modifiedTime = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.modifiedTime',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___accessTime = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.accessTime',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___changeTime = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.changeTime',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___birthTime = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.birthTime',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___root = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.root',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___dir = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.dir',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___ext = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.ext',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___name = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.name',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___relativeDirectory = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.relativeDirectory',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___dev = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.dev',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___mode = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.mode',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___nlink = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.nlink',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___uid = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.uid',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___gid = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.gid',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___rdev = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.rdev',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___blksize = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.blksize',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___ino = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.ino',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___blocks = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.blocks',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___atimeMs = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.atimeMs',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___mtimeMs = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.mtimeMs',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___ctimeMs = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.ctimeMs',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___birthtimeMs = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.birthtimeMs',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___atime = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.atime',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___mtime = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.mtime',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___ctime = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.ctime',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___birthtime = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.birthtime',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___frontmatterField = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.frontmatterField',
  base___childMarkdownRemark___childFrontmatterMarkdownFile___frontmatterValue = 'base.childMarkdownRemark.childFrontmatterMarkdownFile.frontmatterValue',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  frontmatterField = 'frontmatterField',
  frontmatterValue = 'frontmatterValue',
  childMarkdownRemark___id = 'childMarkdownRemark.id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark.frontmatter.title',
  childMarkdownRemark___frontmatter___path = 'childMarkdownRemark.frontmatter.path',
  childMarkdownRemark___frontmatter___showInFooter = 'childMarkdownRemark.frontmatter.showInFooter',
  childMarkdownRemark___frontmatter___headerColour = 'childMarkdownRemark.frontmatter.headerColour',
  childMarkdownRemark___frontmatter___template = 'childMarkdownRemark.frontmatter.template',
  childMarkdownRemark___frontmatter___showInMenu = 'childMarkdownRemark.frontmatter.showInMenu',
  childMarkdownRemark___frontmatter___menuOrder = 'childMarkdownRemark.frontmatter.menuOrder',
  childMarkdownRemark___frontmatter___mainImage___sourceInstanceName = 'childMarkdownRemark.frontmatter.mainImage.sourceInstanceName',
  childMarkdownRemark___frontmatter___mainImage___absolutePath = 'childMarkdownRemark.frontmatter.mainImage.absolutePath',
  childMarkdownRemark___frontmatter___mainImage___relativePath = 'childMarkdownRemark.frontmatter.mainImage.relativePath',
  childMarkdownRemark___frontmatter___mainImage___extension = 'childMarkdownRemark.frontmatter.mainImage.extension',
  childMarkdownRemark___frontmatter___mainImage___size = 'childMarkdownRemark.frontmatter.mainImage.size',
  childMarkdownRemark___frontmatter___mainImage___prettySize = 'childMarkdownRemark.frontmatter.mainImage.prettySize',
  childMarkdownRemark___frontmatter___mainImage___modifiedTime = 'childMarkdownRemark.frontmatter.mainImage.modifiedTime',
  childMarkdownRemark___frontmatter___mainImage___accessTime = 'childMarkdownRemark.frontmatter.mainImage.accessTime',
  childMarkdownRemark___frontmatter___mainImage___changeTime = 'childMarkdownRemark.frontmatter.mainImage.changeTime',
  childMarkdownRemark___frontmatter___mainImage___birthTime = 'childMarkdownRemark.frontmatter.mainImage.birthTime',
  childMarkdownRemark___frontmatter___mainImage___root = 'childMarkdownRemark.frontmatter.mainImage.root',
  childMarkdownRemark___frontmatter___mainImage___dir = 'childMarkdownRemark.frontmatter.mainImage.dir',
  childMarkdownRemark___frontmatter___mainImage___base = 'childMarkdownRemark.frontmatter.mainImage.base',
  childMarkdownRemark___frontmatter___mainImage___ext = 'childMarkdownRemark.frontmatter.mainImage.ext',
  childMarkdownRemark___frontmatter___mainImage___name = 'childMarkdownRemark.frontmatter.mainImage.name',
  childMarkdownRemark___frontmatter___mainImage___relativeDirectory = 'childMarkdownRemark.frontmatter.mainImage.relativeDirectory',
  childMarkdownRemark___frontmatter___mainImage___dev = 'childMarkdownRemark.frontmatter.mainImage.dev',
  childMarkdownRemark___frontmatter___mainImage___mode = 'childMarkdownRemark.frontmatter.mainImage.mode',
  childMarkdownRemark___frontmatter___mainImage___nlink = 'childMarkdownRemark.frontmatter.mainImage.nlink',
  childMarkdownRemark___frontmatter___mainImage___uid = 'childMarkdownRemark.frontmatter.mainImage.uid',
  childMarkdownRemark___frontmatter___mainImage___gid = 'childMarkdownRemark.frontmatter.mainImage.gid',
  childMarkdownRemark___frontmatter___mainImage___rdev = 'childMarkdownRemark.frontmatter.mainImage.rdev',
  childMarkdownRemark___frontmatter___mainImage___ino = 'childMarkdownRemark.frontmatter.mainImage.ino',
  childMarkdownRemark___frontmatter___mainImage___atimeMs = 'childMarkdownRemark.frontmatter.mainImage.atimeMs',
  childMarkdownRemark___frontmatter___mainImage___mtimeMs = 'childMarkdownRemark.frontmatter.mainImage.mtimeMs',
  childMarkdownRemark___frontmatter___mainImage___ctimeMs = 'childMarkdownRemark.frontmatter.mainImage.ctimeMs',
  childMarkdownRemark___frontmatter___mainImage___atime = 'childMarkdownRemark.frontmatter.mainImage.atime',
  childMarkdownRemark___frontmatter___mainImage___mtime = 'childMarkdownRemark.frontmatter.mainImage.mtime',
  childMarkdownRemark___frontmatter___mainImage___ctime = 'childMarkdownRemark.frontmatter.mainImage.ctime',
  childMarkdownRemark___frontmatter___mainImage___birthtime = 'childMarkdownRemark.frontmatter.mainImage.birthtime',
  childMarkdownRemark___frontmatter___mainImage___birthtimeMs = 'childMarkdownRemark.frontmatter.mainImage.birthtimeMs',
  childMarkdownRemark___frontmatter___mainImage___blksize = 'childMarkdownRemark.frontmatter.mainImage.blksize',
  childMarkdownRemark___frontmatter___mainImage___blocks = 'childMarkdownRemark.frontmatter.mainImage.blocks',
  childMarkdownRemark___frontmatter___mainImage___publicURL = 'childMarkdownRemark.frontmatter.mainImage.publicURL',
  childMarkdownRemark___frontmatter___mainImage___id = 'childMarkdownRemark.frontmatter.mainImage.id',
  childMarkdownRemark___frontmatter___mainImage___children = 'childMarkdownRemark.frontmatter.mainImage.children',
  childMarkdownRemark___frontmatter___firstIntroImage___sourceInstanceName = 'childMarkdownRemark.frontmatter.firstIntroImage.sourceInstanceName',
  childMarkdownRemark___frontmatter___firstIntroImage___absolutePath = 'childMarkdownRemark.frontmatter.firstIntroImage.absolutePath',
  childMarkdownRemark___frontmatter___firstIntroImage___relativePath = 'childMarkdownRemark.frontmatter.firstIntroImage.relativePath',
  childMarkdownRemark___frontmatter___firstIntroImage___extension = 'childMarkdownRemark.frontmatter.firstIntroImage.extension',
  childMarkdownRemark___frontmatter___firstIntroImage___size = 'childMarkdownRemark.frontmatter.firstIntroImage.size',
  childMarkdownRemark___frontmatter___firstIntroImage___prettySize = 'childMarkdownRemark.frontmatter.firstIntroImage.prettySize',
  childMarkdownRemark___frontmatter___firstIntroImage___modifiedTime = 'childMarkdownRemark.frontmatter.firstIntroImage.modifiedTime',
  childMarkdownRemark___frontmatter___firstIntroImage___accessTime = 'childMarkdownRemark.frontmatter.firstIntroImage.accessTime',
  childMarkdownRemark___frontmatter___firstIntroImage___changeTime = 'childMarkdownRemark.frontmatter.firstIntroImage.changeTime',
  childMarkdownRemark___frontmatter___firstIntroImage___birthTime = 'childMarkdownRemark.frontmatter.firstIntroImage.birthTime',
  childMarkdownRemark___frontmatter___firstIntroImage___root = 'childMarkdownRemark.frontmatter.firstIntroImage.root',
  childMarkdownRemark___frontmatter___firstIntroImage___dir = 'childMarkdownRemark.frontmatter.firstIntroImage.dir',
  childMarkdownRemark___frontmatter___firstIntroImage___base = 'childMarkdownRemark.frontmatter.firstIntroImage.base',
  childMarkdownRemark___frontmatter___firstIntroImage___ext = 'childMarkdownRemark.frontmatter.firstIntroImage.ext',
  childMarkdownRemark___frontmatter___firstIntroImage___name = 'childMarkdownRemark.frontmatter.firstIntroImage.name',
  childMarkdownRemark___frontmatter___firstIntroImage___relativeDirectory = 'childMarkdownRemark.frontmatter.firstIntroImage.relativeDirectory',
  childMarkdownRemark___frontmatter___firstIntroImage___dev = 'childMarkdownRemark.frontmatter.firstIntroImage.dev',
  childMarkdownRemark___frontmatter___firstIntroImage___mode = 'childMarkdownRemark.frontmatter.firstIntroImage.mode',
  childMarkdownRemark___frontmatter___firstIntroImage___nlink = 'childMarkdownRemark.frontmatter.firstIntroImage.nlink',
  childMarkdownRemark___frontmatter___firstIntroImage___uid = 'childMarkdownRemark.frontmatter.firstIntroImage.uid',
  childMarkdownRemark___frontmatter___firstIntroImage___gid = 'childMarkdownRemark.frontmatter.firstIntroImage.gid',
  childMarkdownRemark___frontmatter___firstIntroImage___rdev = 'childMarkdownRemark.frontmatter.firstIntroImage.rdev',
  childMarkdownRemark___frontmatter___firstIntroImage___ino = 'childMarkdownRemark.frontmatter.firstIntroImage.ino',
  childMarkdownRemark___frontmatter___firstIntroImage___atimeMs = 'childMarkdownRemark.frontmatter.firstIntroImage.atimeMs',
  childMarkdownRemark___frontmatter___firstIntroImage___mtimeMs = 'childMarkdownRemark.frontmatter.firstIntroImage.mtimeMs',
  childMarkdownRemark___frontmatter___firstIntroImage___ctimeMs = 'childMarkdownRemark.frontmatter.firstIntroImage.ctimeMs',
  childMarkdownRemark___frontmatter___firstIntroImage___atime = 'childMarkdownRemark.frontmatter.firstIntroImage.atime',
  childMarkdownRemark___frontmatter___firstIntroImage___mtime = 'childMarkdownRemark.frontmatter.firstIntroImage.mtime',
  childMarkdownRemark___frontmatter___firstIntroImage___ctime = 'childMarkdownRemark.frontmatter.firstIntroImage.ctime',
  childMarkdownRemark___frontmatter___firstIntroImage___birthtime = 'childMarkdownRemark.frontmatter.firstIntroImage.birthtime',
  childMarkdownRemark___frontmatter___firstIntroImage___birthtimeMs = 'childMarkdownRemark.frontmatter.firstIntroImage.birthtimeMs',
  childMarkdownRemark___frontmatter___firstIntroImage___blksize = 'childMarkdownRemark.frontmatter.firstIntroImage.blksize',
  childMarkdownRemark___frontmatter___firstIntroImage___blocks = 'childMarkdownRemark.frontmatter.firstIntroImage.blocks',
  childMarkdownRemark___frontmatter___firstIntroImage___publicURL = 'childMarkdownRemark.frontmatter.firstIntroImage.publicURL',
  childMarkdownRemark___frontmatter___firstIntroImage___id = 'childMarkdownRemark.frontmatter.firstIntroImage.id',
  childMarkdownRemark___frontmatter___firstIntroImage___children = 'childMarkdownRemark.frontmatter.firstIntroImage.children',
  childMarkdownRemark___frontmatter___secondIntroImage___sourceInstanceName = 'childMarkdownRemark.frontmatter.secondIntroImage.sourceInstanceName',
  childMarkdownRemark___frontmatter___secondIntroImage___absolutePath = 'childMarkdownRemark.frontmatter.secondIntroImage.absolutePath',
  childMarkdownRemark___frontmatter___secondIntroImage___relativePath = 'childMarkdownRemark.frontmatter.secondIntroImage.relativePath',
  childMarkdownRemark___frontmatter___secondIntroImage___extension = 'childMarkdownRemark.frontmatter.secondIntroImage.extension',
  childMarkdownRemark___frontmatter___secondIntroImage___size = 'childMarkdownRemark.frontmatter.secondIntroImage.size',
  childMarkdownRemark___frontmatter___secondIntroImage___prettySize = 'childMarkdownRemark.frontmatter.secondIntroImage.prettySize',
  childMarkdownRemark___frontmatter___secondIntroImage___modifiedTime = 'childMarkdownRemark.frontmatter.secondIntroImage.modifiedTime',
  childMarkdownRemark___frontmatter___secondIntroImage___accessTime = 'childMarkdownRemark.frontmatter.secondIntroImage.accessTime',
  childMarkdownRemark___frontmatter___secondIntroImage___changeTime = 'childMarkdownRemark.frontmatter.secondIntroImage.changeTime',
  childMarkdownRemark___frontmatter___secondIntroImage___birthTime = 'childMarkdownRemark.frontmatter.secondIntroImage.birthTime',
  childMarkdownRemark___frontmatter___secondIntroImage___root = 'childMarkdownRemark.frontmatter.secondIntroImage.root',
  childMarkdownRemark___frontmatter___secondIntroImage___dir = 'childMarkdownRemark.frontmatter.secondIntroImage.dir',
  childMarkdownRemark___frontmatter___secondIntroImage___base = 'childMarkdownRemark.frontmatter.secondIntroImage.base',
  childMarkdownRemark___frontmatter___secondIntroImage___ext = 'childMarkdownRemark.frontmatter.secondIntroImage.ext',
  childMarkdownRemark___frontmatter___secondIntroImage___name = 'childMarkdownRemark.frontmatter.secondIntroImage.name',
  childMarkdownRemark___frontmatter___secondIntroImage___relativeDirectory = 'childMarkdownRemark.frontmatter.secondIntroImage.relativeDirectory',
  childMarkdownRemark___frontmatter___secondIntroImage___dev = 'childMarkdownRemark.frontmatter.secondIntroImage.dev',
  childMarkdownRemark___frontmatter___secondIntroImage___mode = 'childMarkdownRemark.frontmatter.secondIntroImage.mode',
  childMarkdownRemark___frontmatter___secondIntroImage___nlink = 'childMarkdownRemark.frontmatter.secondIntroImage.nlink',
  childMarkdownRemark___frontmatter___secondIntroImage___uid = 'childMarkdownRemark.frontmatter.secondIntroImage.uid',
  childMarkdownRemark___frontmatter___secondIntroImage___gid = 'childMarkdownRemark.frontmatter.secondIntroImage.gid',
  childMarkdownRemark___frontmatter___secondIntroImage___rdev = 'childMarkdownRemark.frontmatter.secondIntroImage.rdev',
  childMarkdownRemark___frontmatter___secondIntroImage___ino = 'childMarkdownRemark.frontmatter.secondIntroImage.ino',
  childMarkdownRemark___frontmatter___secondIntroImage___atimeMs = 'childMarkdownRemark.frontmatter.secondIntroImage.atimeMs',
  childMarkdownRemark___frontmatter___secondIntroImage___mtimeMs = 'childMarkdownRemark.frontmatter.secondIntroImage.mtimeMs',
  childMarkdownRemark___frontmatter___secondIntroImage___ctimeMs = 'childMarkdownRemark.frontmatter.secondIntroImage.ctimeMs',
  childMarkdownRemark___frontmatter___secondIntroImage___atime = 'childMarkdownRemark.frontmatter.secondIntroImage.atime',
  childMarkdownRemark___frontmatter___secondIntroImage___mtime = 'childMarkdownRemark.frontmatter.secondIntroImage.mtime',
  childMarkdownRemark___frontmatter___secondIntroImage___ctime = 'childMarkdownRemark.frontmatter.secondIntroImage.ctime',
  childMarkdownRemark___frontmatter___secondIntroImage___birthtime = 'childMarkdownRemark.frontmatter.secondIntroImage.birthtime',
  childMarkdownRemark___frontmatter___secondIntroImage___birthtimeMs = 'childMarkdownRemark.frontmatter.secondIntroImage.birthtimeMs',
  childMarkdownRemark___frontmatter___secondIntroImage___blksize = 'childMarkdownRemark.frontmatter.secondIntroImage.blksize',
  childMarkdownRemark___frontmatter___secondIntroImage___blocks = 'childMarkdownRemark.frontmatter.secondIntroImage.blocks',
  childMarkdownRemark___frontmatter___secondIntroImage___publicURL = 'childMarkdownRemark.frontmatter.secondIntroImage.publicURL',
  childMarkdownRemark___frontmatter___secondIntroImage___id = 'childMarkdownRemark.frontmatter.secondIntroImage.id',
  childMarkdownRemark___frontmatter___secondIntroImage___children = 'childMarkdownRemark.frontmatter.secondIntroImage.children',
  childMarkdownRemark___frontmatter___overlayCaption = 'childMarkdownRemark.frontmatter.overlayCaption',
  childMarkdownRemark___frontmatter___captionPosition = 'childMarkdownRemark.frontmatter.captionPosition',
  childMarkdownRemark___frontmatter___findOutMoreText = 'childMarkdownRemark.frontmatter.findOutMoreText',
  childMarkdownRemark___frontmatter___signupPlaceholder = 'childMarkdownRemark.frontmatter.signupPlaceholder',
  childMarkdownRemark___frontmatter___action = 'childMarkdownRemark.frontmatter.action',
  childMarkdownRemark___frontmatter___hiddenValue = 'childMarkdownRemark.frontmatter.hiddenValue',
  childMarkdownRemark___frontmatter___layout = 'childMarkdownRemark.frontmatter.layout',
  childMarkdownRemark___frontmatter___section = 'childMarkdownRemark.frontmatter.section',
  childMarkdownRemark___frontmatter___image___sourceInstanceName = 'childMarkdownRemark.frontmatter.image.sourceInstanceName',
  childMarkdownRemark___frontmatter___image___absolutePath = 'childMarkdownRemark.frontmatter.image.absolutePath',
  childMarkdownRemark___frontmatter___image___relativePath = 'childMarkdownRemark.frontmatter.image.relativePath',
  childMarkdownRemark___frontmatter___image___extension = 'childMarkdownRemark.frontmatter.image.extension',
  childMarkdownRemark___frontmatter___image___size = 'childMarkdownRemark.frontmatter.image.size',
  childMarkdownRemark___frontmatter___image___prettySize = 'childMarkdownRemark.frontmatter.image.prettySize',
  childMarkdownRemark___frontmatter___image___modifiedTime = 'childMarkdownRemark.frontmatter.image.modifiedTime',
  childMarkdownRemark___frontmatter___image___accessTime = 'childMarkdownRemark.frontmatter.image.accessTime',
  childMarkdownRemark___frontmatter___image___changeTime = 'childMarkdownRemark.frontmatter.image.changeTime',
  childMarkdownRemark___frontmatter___image___birthTime = 'childMarkdownRemark.frontmatter.image.birthTime',
  childMarkdownRemark___frontmatter___image___root = 'childMarkdownRemark.frontmatter.image.root',
  childMarkdownRemark___frontmatter___image___dir = 'childMarkdownRemark.frontmatter.image.dir',
  childMarkdownRemark___frontmatter___image___base = 'childMarkdownRemark.frontmatter.image.base',
  childMarkdownRemark___frontmatter___image___ext = 'childMarkdownRemark.frontmatter.image.ext',
  childMarkdownRemark___frontmatter___image___name = 'childMarkdownRemark.frontmatter.image.name',
  childMarkdownRemark___frontmatter___image___relativeDirectory = 'childMarkdownRemark.frontmatter.image.relativeDirectory',
  childMarkdownRemark___frontmatter___image___dev = 'childMarkdownRemark.frontmatter.image.dev',
  childMarkdownRemark___frontmatter___image___mode = 'childMarkdownRemark.frontmatter.image.mode',
  childMarkdownRemark___frontmatter___image___nlink = 'childMarkdownRemark.frontmatter.image.nlink',
  childMarkdownRemark___frontmatter___image___uid = 'childMarkdownRemark.frontmatter.image.uid',
  childMarkdownRemark___frontmatter___image___gid = 'childMarkdownRemark.frontmatter.image.gid',
  childMarkdownRemark___frontmatter___image___rdev = 'childMarkdownRemark.frontmatter.image.rdev',
  childMarkdownRemark___frontmatter___image___ino = 'childMarkdownRemark.frontmatter.image.ino',
  childMarkdownRemark___frontmatter___image___atimeMs = 'childMarkdownRemark.frontmatter.image.atimeMs',
  childMarkdownRemark___frontmatter___image___mtimeMs = 'childMarkdownRemark.frontmatter.image.mtimeMs',
  childMarkdownRemark___frontmatter___image___ctimeMs = 'childMarkdownRemark.frontmatter.image.ctimeMs',
  childMarkdownRemark___frontmatter___image___atime = 'childMarkdownRemark.frontmatter.image.atime',
  childMarkdownRemark___frontmatter___image___mtime = 'childMarkdownRemark.frontmatter.image.mtime',
  childMarkdownRemark___frontmatter___image___ctime = 'childMarkdownRemark.frontmatter.image.ctime',
  childMarkdownRemark___frontmatter___image___birthtime = 'childMarkdownRemark.frontmatter.image.birthtime',
  childMarkdownRemark___frontmatter___image___birthtimeMs = 'childMarkdownRemark.frontmatter.image.birthtimeMs',
  childMarkdownRemark___frontmatter___image___blksize = 'childMarkdownRemark.frontmatter.image.blksize',
  childMarkdownRemark___frontmatter___image___blocks = 'childMarkdownRemark.frontmatter.image.blocks',
  childMarkdownRemark___frontmatter___image___publicURL = 'childMarkdownRemark.frontmatter.image.publicURL',
  childMarkdownRemark___frontmatter___image___id = 'childMarkdownRemark.frontmatter.image.id',
  childMarkdownRemark___frontmatter___image___children = 'childMarkdownRemark.frontmatter.image.children',
  childMarkdownRemark___frontmatter___carouselImages = 'childMarkdownRemark.frontmatter.carouselImages',
  childMarkdownRemark___frontmatter___carouselImages___position = 'childMarkdownRemark.frontmatter.carouselImages.position',
  childMarkdownRemark___frontmatter___sitemap = 'childMarkdownRemark.frontmatter.sitemap',
  childMarkdownRemark___frontmatter___image_alignment_classes = 'childMarkdownRemark.frontmatter.image_alignment_classes',
  childMarkdownRemark___frontmatter___itunesPodcastURL = 'childMarkdownRemark.frontmatter.itunesPodcastURL',
  childMarkdownRemark___frontmatter___podcastURL = 'childMarkdownRemark.frontmatter.podcastURL',
  childMarkdownRemark___frontmatter___iosAppStoreLink = 'childMarkdownRemark.frontmatter.iosAppStoreLink',
  childMarkdownRemark___frontmatter___playStoreLink = 'childMarkdownRemark.frontmatter.playStoreLink',
  childMarkdownRemark___frontmatter___mobileImage = 'childMarkdownRemark.frontmatter.mobileImage',
  childMarkdownRemark___frontmatter___releases = 'childMarkdownRemark.frontmatter.releases',
  childMarkdownRemark___frontmatter___releases___title = 'childMarkdownRemark.frontmatter.releases.title',
  childMarkdownRemark___frontmatter___releases___type = 'childMarkdownRemark.frontmatter.releases.type',
  childMarkdownRemark___frontmatter___releases___date = 'childMarkdownRemark.frontmatter.releases.date',
  childMarkdownRemark___frontmatter___releases___appleMusicLink = 'childMarkdownRemark.frontmatter.releases.appleMusicLink',
  childMarkdownRemark___frontmatter___releases___spotifyLink = 'childMarkdownRemark.frontmatter.releases.spotifyLink',
  childMarkdownRemark___frontmatter___resources = 'childMarkdownRemark.frontmatter.resources',
  childMarkdownRemark___frontmatter___resources___title = 'childMarkdownRemark.frontmatter.resources.title',
  childMarkdownRemark___frontmatter___resources___files = 'childMarkdownRemark.frontmatter.resources.files',
  childMarkdownRemark___frontmatter___dayOfWeek = 'childMarkdownRemark.frontmatter.dayOfWeek',
  childMarkdownRemark___frontmatter___type = 'childMarkdownRemark.frontmatter.type',
  childMarkdownRemark___frontmatter___time = 'childMarkdownRemark.frontmatter.time',
  childMarkdownRemark___frontmatter___timeOfDay = 'childMarkdownRemark.frontmatter.timeOfDay',
  childMarkdownRemark___frontmatter___name = 'childMarkdownRemark.frontmatter.name',
  childMarkdownRemark___frontmatter___status = 'childMarkdownRemark.frontmatter.status',
  childMarkdownRemark___frontmatter___backgroundColour = 'childMarkdownRemark.frontmatter.backgroundColour',
  childMarkdownRemark___frontmatter___textColour = 'childMarkdownRemark.frontmatter.textColour',
  childMarkdownRemark___frontmatter___eventType = 'childMarkdownRemark.frontmatter.eventType',
  childMarkdownRemark___frontmatter___events = 'childMarkdownRemark.frontmatter.events',
  childMarkdownRemark___frontmatter___events___title = 'childMarkdownRemark.frontmatter.events.title',
  childMarkdownRemark___frontmatter___events___description = 'childMarkdownRemark.frontmatter.events.description',
  childMarkdownRemark___frontmatter___events___date = 'childMarkdownRemark.frontmatter.events.date',
  childMarkdownRemark___frontmatter___events___time = 'childMarkdownRemark.frontmatter.events.time',
  childMarkdownRemark___frontmatter___events___expires = 'childMarkdownRemark.frontmatter.events.expires',
  childMarkdownRemark___frontmatter___events___tags = 'childMarkdownRemark.frontmatter.events.tags',
  childMarkdownRemark___frontmatter___order = 'childMarkdownRemark.frontmatter.order',
  childMarkdownRemark___frontmatter___lastUpdated = 'childMarkdownRemark.frontmatter.lastUpdated',
  childMarkdownRemark___frontmatter___features = 'childMarkdownRemark.frontmatter.features',
  childMarkdownRemark___frontmatter___features___title = 'childMarkdownRemark.frontmatter.features.title',
  childMarkdownRemark___frontmatter___features___description = 'childMarkdownRemark.frontmatter.features.description',
  childMarkdownRemark___frontmatter___features___buttonText = 'childMarkdownRemark.frontmatter.features.buttonText',
  childMarkdownRemark___frontmatter___features___buttonLink = 'childMarkdownRemark.frontmatter.features.buttonLink',
  childMarkdownRemark___frontmatter___tagLine = 'childMarkdownRemark.frontmatter.tagLine',
  childMarkdownRemark___frontmatter___eventDate = 'childMarkdownRemark.frontmatter.eventDate',
  childMarkdownRemark___frontmatter___price = 'childMarkdownRemark.frontmatter.price',
  childMarkdownRemark___frontmatter___signUpEmail = 'childMarkdownRemark.frontmatter.signUpEmail',
  childMarkdownRemark___frontmatter___leader = 'childMarkdownRemark.frontmatter.leader',
  childMarkdownRemark___frontmatter___people = 'childMarkdownRemark.frontmatter.people',
  childMarkdownRemark___frontmatter___people___name = 'childMarkdownRemark.frontmatter.people.name',
  childMarkdownRemark___frontmatter___people___title = 'childMarkdownRemark.frontmatter.people.title',
  childMarkdownRemark___frontmatter___people___photo = 'childMarkdownRemark.frontmatter.people.photo',
  childMarkdownRemark___frontmatter___people___headshot_position = 'childMarkdownRemark.frontmatter.people.headshot_position',
  childMarkdownRemark___frontmatter___findOutMoreLink = 'childMarkdownRemark.frontmatter.findOutMoreLink',
  childMarkdownRemark___frontmatter___style_classes = 'childMarkdownRemark.frontmatter.style_classes',
  childMarkdownRemark___frontmatter___imageObjectPosition = 'childMarkdownRemark.frontmatter.imageObjectPosition',
  childMarkdownRemark___frontmatter___fullBleed = 'childMarkdownRemark.frontmatter.fullBleed',
  childMarkdownRemark___excerpt = 'childMarkdownRemark.excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___fileAbsolutePath = 'childMarkdownRemark.fileAbsolutePath',
  childMarkdownRemark___html = 'childMarkdownRemark.html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark.htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark.excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark.headings',
  childMarkdownRemark___headings___value = 'childMarkdownRemark.headings.value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark.headings.depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark.timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark.tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark.wordCount.paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark.wordCount.sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark.wordCount.words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark.parent.id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark.parent.parent.id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark.parent.parent.children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark.parent.children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark.parent.children.id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark.parent.children.children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark.parent.internal.content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark.parent.internal.contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark.parent.internal.description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark.parent.internal.fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark.parent.internal.ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark.parent.internal.mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark.parent.internal.owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark.parent.internal.type',
  childMarkdownRemark___children = 'childMarkdownRemark.children',
  childMarkdownRemark___children___id = 'childMarkdownRemark.children.id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark.children.parent.id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark.children.parent.children',
  childMarkdownRemark___children___children = 'childMarkdownRemark.children.children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark.children.children.id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark.children.children.children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark.children.internal.content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark.children.internal.contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark.children.internal.description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark.children.internal.fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark.children.internal.ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark.children.internal.mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark.children.internal.owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark.children.internal.type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark.internal.content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark.internal.contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark.internal.description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark.internal.fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark.internal.ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark.internal.mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark.internal.owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark.internal.type',
  childMarkdownRemark___childFrontmatterMarkdownFile___id = 'childMarkdownRemark.childFrontmatterMarkdownFile.id',
  childMarkdownRemark___childFrontmatterMarkdownFile___parent___id = 'childMarkdownRemark.childFrontmatterMarkdownFile.parent.id',
  childMarkdownRemark___childFrontmatterMarkdownFile___parent___children = 'childMarkdownRemark.childFrontmatterMarkdownFile.parent.children',
  childMarkdownRemark___childFrontmatterMarkdownFile___children = 'childMarkdownRemark.childFrontmatterMarkdownFile.children',
  childMarkdownRemark___childFrontmatterMarkdownFile___children___id = 'childMarkdownRemark.childFrontmatterMarkdownFile.children.id',
  childMarkdownRemark___childFrontmatterMarkdownFile___children___children = 'childMarkdownRemark.childFrontmatterMarkdownFile.children.children',
  childMarkdownRemark___childFrontmatterMarkdownFile___internal___content = 'childMarkdownRemark.childFrontmatterMarkdownFile.internal.content',
  childMarkdownRemark___childFrontmatterMarkdownFile___internal___contentDigest = 'childMarkdownRemark.childFrontmatterMarkdownFile.internal.contentDigest',
  childMarkdownRemark___childFrontmatterMarkdownFile___internal___description = 'childMarkdownRemark.childFrontmatterMarkdownFile.internal.description',
  childMarkdownRemark___childFrontmatterMarkdownFile___internal___fieldOwners = 'childMarkdownRemark.childFrontmatterMarkdownFile.internal.fieldOwners',
  childMarkdownRemark___childFrontmatterMarkdownFile___internal___ignoreType = 'childMarkdownRemark.childFrontmatterMarkdownFile.internal.ignoreType',
  childMarkdownRemark___childFrontmatterMarkdownFile___internal___mediaType = 'childMarkdownRemark.childFrontmatterMarkdownFile.internal.mediaType',
  childMarkdownRemark___childFrontmatterMarkdownFile___internal___owner = 'childMarkdownRemark.childFrontmatterMarkdownFile.internal.owner',
  childMarkdownRemark___childFrontmatterMarkdownFile___internal___type = 'childMarkdownRemark.childFrontmatterMarkdownFile.internal.type',
  childMarkdownRemark___childFrontmatterMarkdownFile___sourceInstanceName = 'childMarkdownRemark.childFrontmatterMarkdownFile.sourceInstanceName',
  childMarkdownRemark___childFrontmatterMarkdownFile___absolutePath = 'childMarkdownRemark.childFrontmatterMarkdownFile.absolutePath',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___sourceInstanceName = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.sourceInstanceName',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___absolutePath = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.absolutePath',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___relativePath = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.relativePath',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___extension = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.extension',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___size = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.size',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___prettySize = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.prettySize',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___modifiedTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.modifiedTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___accessTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.accessTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___changeTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.changeTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___birthTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.birthTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___root = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.root',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___dir = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.dir',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___base = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.base',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___ext = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.ext',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___name = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.name',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___relativeDirectory = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.relativeDirectory',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___dev = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.dev',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___mode = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.mode',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___nlink = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.nlink',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___uid = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.uid',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___gid = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.gid',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___rdev = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.rdev',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___ino = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.ino',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___atimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.atimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___mtimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.mtimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___ctimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.ctimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___atime = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.atime',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___mtime = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.mtime',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___ctime = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.ctime',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___birthtime = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.birthtime',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___birthtimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.birthtimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___blksize = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.blksize',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___blocks = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.blocks',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___publicURL = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.publicURL',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___id = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.id',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativePath___children = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativePath.children',
  childMarkdownRemark___childFrontmatterMarkdownFile___extension = 'childMarkdownRemark.childFrontmatterMarkdownFile.extension',
  childMarkdownRemark___childFrontmatterMarkdownFile___size = 'childMarkdownRemark.childFrontmatterMarkdownFile.size',
  childMarkdownRemark___childFrontmatterMarkdownFile___prettySize = 'childMarkdownRemark.childFrontmatterMarkdownFile.prettySize',
  childMarkdownRemark___childFrontmatterMarkdownFile___modifiedTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.modifiedTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___accessTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.accessTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___changeTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.changeTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___birthTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.birthTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___root = 'childMarkdownRemark.childFrontmatterMarkdownFile.root',
  childMarkdownRemark___childFrontmatterMarkdownFile___dir = 'childMarkdownRemark.childFrontmatterMarkdownFile.dir',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___sourceInstanceName = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.sourceInstanceName',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___absolutePath = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.absolutePath',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___relativePath = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.relativePath',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___extension = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.extension',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___size = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.size',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___prettySize = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.prettySize',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___modifiedTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.modifiedTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___accessTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.accessTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___changeTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.changeTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___birthTime = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.birthTime',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___root = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.root',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___dir = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.dir',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___base = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.base',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___ext = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.ext',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___name = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.name',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___relativeDirectory = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.relativeDirectory',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___dev = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.dev',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___mode = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.mode',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___nlink = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.nlink',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___uid = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.uid',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___gid = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.gid',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___rdev = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.rdev',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___ino = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.ino',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___atimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.atimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___mtimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.mtimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___ctimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.ctimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___atime = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.atime',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___mtime = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.mtime',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___ctime = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.ctime',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___birthtime = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.birthtime',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___birthtimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.birthtimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___blksize = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.blksize',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___blocks = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.blocks',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___publicURL = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.publicURL',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___id = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.id',
  childMarkdownRemark___childFrontmatterMarkdownFile___base___children = 'childMarkdownRemark.childFrontmatterMarkdownFile.base.children',
  childMarkdownRemark___childFrontmatterMarkdownFile___ext = 'childMarkdownRemark.childFrontmatterMarkdownFile.ext',
  childMarkdownRemark___childFrontmatterMarkdownFile___name = 'childMarkdownRemark.childFrontmatterMarkdownFile.name',
  childMarkdownRemark___childFrontmatterMarkdownFile___relativeDirectory = 'childMarkdownRemark.childFrontmatterMarkdownFile.relativeDirectory',
  childMarkdownRemark___childFrontmatterMarkdownFile___dev = 'childMarkdownRemark.childFrontmatterMarkdownFile.dev',
  childMarkdownRemark___childFrontmatterMarkdownFile___mode = 'childMarkdownRemark.childFrontmatterMarkdownFile.mode',
  childMarkdownRemark___childFrontmatterMarkdownFile___nlink = 'childMarkdownRemark.childFrontmatterMarkdownFile.nlink',
  childMarkdownRemark___childFrontmatterMarkdownFile___uid = 'childMarkdownRemark.childFrontmatterMarkdownFile.uid',
  childMarkdownRemark___childFrontmatterMarkdownFile___gid = 'childMarkdownRemark.childFrontmatterMarkdownFile.gid',
  childMarkdownRemark___childFrontmatterMarkdownFile___rdev = 'childMarkdownRemark.childFrontmatterMarkdownFile.rdev',
  childMarkdownRemark___childFrontmatterMarkdownFile___blksize = 'childMarkdownRemark.childFrontmatterMarkdownFile.blksize',
  childMarkdownRemark___childFrontmatterMarkdownFile___ino = 'childMarkdownRemark.childFrontmatterMarkdownFile.ino',
  childMarkdownRemark___childFrontmatterMarkdownFile___blocks = 'childMarkdownRemark.childFrontmatterMarkdownFile.blocks',
  childMarkdownRemark___childFrontmatterMarkdownFile___atimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.atimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___mtimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.mtimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___ctimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.ctimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___birthtimeMs = 'childMarkdownRemark.childFrontmatterMarkdownFile.birthtimeMs',
  childMarkdownRemark___childFrontmatterMarkdownFile___atime = 'childMarkdownRemark.childFrontmatterMarkdownFile.atime',
  childMarkdownRemark___childFrontmatterMarkdownFile___mtime = 'childMarkdownRemark.childFrontmatterMarkdownFile.mtime',
  childMarkdownRemark___childFrontmatterMarkdownFile___ctime = 'childMarkdownRemark.childFrontmatterMarkdownFile.ctime',
  childMarkdownRemark___childFrontmatterMarkdownFile___birthtime = 'childMarkdownRemark.childFrontmatterMarkdownFile.birthtime',
  childMarkdownRemark___childFrontmatterMarkdownFile___frontmatterField = 'childMarkdownRemark.childFrontmatterMarkdownFile.frontmatterField',
  childMarkdownRemark___childFrontmatterMarkdownFile___frontmatterValue = 'childMarkdownRemark.childFrontmatterMarkdownFile.frontmatterValue',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___id = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.id',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___excerpt = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.excerpt',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___fileAbsolutePath = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.fileAbsolutePath',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___html = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.html',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___htmlAst = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.htmlAst',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___excerptAst = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.excerptAst',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___headings = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.headings',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___timeToRead = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.timeToRead',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___tableOfContents = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.tableOfContents',
  childMarkdownRemark___childFrontmatterMarkdownFile___childMarkdownRemark___children = 'childMarkdownRemark.childFrontmatterMarkdownFile.childMarkdownRemark.children'
}

type FrontmatterMarkdownFileFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<FileFilterInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<FileFilterInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly frontmatterField: Maybe<StringQueryOperatorInput>;
  readonly frontmatterValue: Maybe<StringQueryOperatorInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type FrontmatterMarkdownFileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FrontmatterMarkdownFileEdge>;
  readonly nodes: ReadonlyArray<FrontmatterMarkdownFile>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FrontmatterMarkdownFileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FrontmatterMarkdownFileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GitAuthor = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
};

type GitAuthorConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GitAuthorEdge>;
  readonly nodes: ReadonlyArray<GitAuthor>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GitAuthorGroupConnection>;
};


type GitAuthorConnection_distinctArgs = {
  field: GitAuthorFieldsEnum;
};


type GitAuthorConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GitAuthorFieldsEnum;
};

type GitAuthorEdge = {
  readonly next: Maybe<GitAuthor>;
  readonly node: GitAuthor;
  readonly previous: Maybe<GitAuthor>;
};

enum GitAuthorFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  name = 'name',
  email = 'email'
}

type GitAuthorFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly email: Maybe<StringQueryOperatorInput>;
};

type GitAuthorGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GitAuthorEdge>;
  readonly nodes: ReadonlyArray<GitAuthor>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GitAuthorSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GitAuthorFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GitBranch = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly commit: Maybe<Scalars['String']>;
  readonly current: Maybe<Scalars['Boolean']>;
};

type GitBranchConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GitBranchEdge>;
  readonly nodes: ReadonlyArray<GitBranch>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GitBranchGroupConnection>;
};


type GitBranchConnection_distinctArgs = {
  field: GitBranchFieldsEnum;
};


type GitBranchConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GitBranchFieldsEnum;
};

type GitBranchEdge = {
  readonly next: Maybe<GitBranch>;
  readonly node: GitBranch;
  readonly previous: Maybe<GitBranch>;
};

enum GitBranchFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  name = 'name',
  commit = 'commit',
  current = 'current'
}

type GitBranchFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly commit: Maybe<StringQueryOperatorInput>;
  readonly current: Maybe<BooleanQueryOperatorInput>;
};

type GitBranchGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GitBranchEdge>;
  readonly nodes: ReadonlyArray<GitBranch>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GitBranchSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GitBranchFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GitCommit = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly hash: Maybe<Scalars['String']>;
  readonly message: Maybe<Scalars['String']>;
  readonly refs: Maybe<Scalars['String']>;
  readonly body: Maybe<Scalars['String']>;
  readonly date: Maybe<Scalars['Date']>;
  readonly latest: Maybe<Scalars['Boolean']>;
  readonly author: Maybe<GitAuthor>;
};


type GitCommit_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type GitCommitConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GitCommitEdge>;
  readonly nodes: ReadonlyArray<GitCommit>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GitCommitGroupConnection>;
};


type GitCommitConnection_distinctArgs = {
  field: GitCommitFieldsEnum;
};


type GitCommitConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GitCommitFieldsEnum;
};

type GitCommitEdge = {
  readonly next: Maybe<GitCommit>;
  readonly node: GitCommit;
  readonly previous: Maybe<GitCommit>;
};

enum GitCommitFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  hash = 'hash',
  message = 'message',
  refs = 'refs',
  body = 'body',
  date = 'date',
  latest = 'latest',
  author___id = 'author.id',
  author___parent___id = 'author.parent.id',
  author___parent___parent___id = 'author.parent.parent.id',
  author___parent___parent___children = 'author.parent.parent.children',
  author___parent___children = 'author.parent.children',
  author___parent___children___id = 'author.parent.children.id',
  author___parent___children___children = 'author.parent.children.children',
  author___parent___internal___content = 'author.parent.internal.content',
  author___parent___internal___contentDigest = 'author.parent.internal.contentDigest',
  author___parent___internal___description = 'author.parent.internal.description',
  author___parent___internal___fieldOwners = 'author.parent.internal.fieldOwners',
  author___parent___internal___ignoreType = 'author.parent.internal.ignoreType',
  author___parent___internal___mediaType = 'author.parent.internal.mediaType',
  author___parent___internal___owner = 'author.parent.internal.owner',
  author___parent___internal___type = 'author.parent.internal.type',
  author___children = 'author.children',
  author___children___id = 'author.children.id',
  author___children___parent___id = 'author.children.parent.id',
  author___children___parent___children = 'author.children.parent.children',
  author___children___children = 'author.children.children',
  author___children___children___id = 'author.children.children.id',
  author___children___children___children = 'author.children.children.children',
  author___children___internal___content = 'author.children.internal.content',
  author___children___internal___contentDigest = 'author.children.internal.contentDigest',
  author___children___internal___description = 'author.children.internal.description',
  author___children___internal___fieldOwners = 'author.children.internal.fieldOwners',
  author___children___internal___ignoreType = 'author.children.internal.ignoreType',
  author___children___internal___mediaType = 'author.children.internal.mediaType',
  author___children___internal___owner = 'author.children.internal.owner',
  author___children___internal___type = 'author.children.internal.type',
  author___internal___content = 'author.internal.content',
  author___internal___contentDigest = 'author.internal.contentDigest',
  author___internal___description = 'author.internal.description',
  author___internal___fieldOwners = 'author.internal.fieldOwners',
  author___internal___ignoreType = 'author.internal.ignoreType',
  author___internal___mediaType = 'author.internal.mediaType',
  author___internal___owner = 'author.internal.owner',
  author___internal___type = 'author.internal.type',
  author___name = 'author.name',
  author___email = 'author.email'
}

type GitCommitFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly message: Maybe<StringQueryOperatorInput>;
  readonly refs: Maybe<StringQueryOperatorInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly latest: Maybe<BooleanQueryOperatorInput>;
  readonly author: Maybe<GitAuthorFilterInput>;
};

type GitCommitGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GitCommitEdge>;
  readonly nodes: ReadonlyArray<GitCommit>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GitCommitSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GitCommitFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 1,
  NORTHEAST = 5,
  EAST = 2,
  SOUTHEAST = 6,
  SOUTH = 3,
  SOUTHWEST = 7,
  WEST = 4,
  NORTHWEST = 8,
  ENTROPY = 16,
  ATTENTION = 17
}

enum ImageFit {
  COVER = 'cover',
  CONTAIN = 'contain',
  FILL = 'fill',
  INSIDE = 'inside',
  OUTSIDE = 'outside'
}

enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions: Maybe<ImageSharpResolutions>;
  readonly fluid: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes: Maybe<ImageSharpSizes>;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_resolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_sizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed.base64',
  fixed___tracedSVG = 'fixed.tracedSVG',
  fixed___aspectRatio = 'fixed.aspectRatio',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  fixed___originalName = 'fixed.originalName',
  resolutions___base64 = 'resolutions.base64',
  resolutions___tracedSVG = 'resolutions.tracedSVG',
  resolutions___aspectRatio = 'resolutions.aspectRatio',
  resolutions___width = 'resolutions.width',
  resolutions___height = 'resolutions.height',
  resolutions___src = 'resolutions.src',
  resolutions___srcSet = 'resolutions.srcSet',
  resolutions___srcWebp = 'resolutions.srcWebp',
  resolutions___srcSetWebp = 'resolutions.srcSetWebp',
  resolutions___originalName = 'resolutions.originalName',
  fluid___base64 = 'fluid.base64',
  fluid___tracedSVG = 'fluid.tracedSVG',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  fluid___originalImg = 'fluid.originalImg',
  fluid___originalName = 'fluid.originalName',
  fluid___presentationWidth = 'fluid.presentationWidth',
  fluid___presentationHeight = 'fluid.presentationHeight',
  sizes___base64 = 'sizes.base64',
  sizes___tracedSVG = 'sizes.tracedSVG',
  sizes___aspectRatio = 'sizes.aspectRatio',
  sizes___src = 'sizes.src',
  sizes___srcSet = 'sizes.srcSet',
  sizes___srcWebp = 'sizes.srcWebp',
  sizes___srcSetWebp = 'sizes.srcSetWebp',
  sizes___sizes = 'sizes.sizes',
  sizes___originalImg = 'sizes.originalImg',
  sizes___originalName = 'sizes.originalName',
  sizes___presentationWidth = 'sizes.presentationWidth',
  sizes___presentationHeight = 'sizes.presentationHeight',
  original___width = 'original.width',
  original___height = 'original.height',
  original___src = 'original.src',
  resize___src = 'resize.src',
  resize___tracedSVG = 'resize.tracedSVG',
  resize___width = 'resize.width',
  resize___height = 'resize.height',
  resize___aspectRatio = 'resize.aspectRatio',
  resize___originalName = 'resize.originalName',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly sizes: Maybe<ImageSharpSizesFilterInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Maybe<Scalars['Int']>;
  readonly presentationHeight: Maybe<Scalars['Int']>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResolutions = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResolutionsFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpSizes = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Maybe<Scalars['Int']>;
  readonly presentationHeight: Maybe<Scalars['Int']>;
};

type ImageSharpSizesFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

enum MarkdownExcerptFormats {
  PLAIN = 'PLAIN',
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN'
}

type MarkdownHeading = {
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingFilterInput = {
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

enum MarkdownHeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

type MarkdownRemark = Node & {
  readonly id: Scalars['ID'];
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly fileAbsolutePath: Maybe<Scalars['String']>;
  readonly fields: Maybe<MarkdownRemarkFields>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly childFrontmatterMarkdownFile: Maybe<FrontmatterMarkdownFile>;
};


type MarkdownRemark_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFields = {
  readonly frontmattermd: Maybe<MarkdownRemarkFieldsFrontmattermd>;
};

enum MarkdownRemarkFieldsEnum {
  id = 'id',
  frontmatter___title = 'frontmatter.title',
  frontmatter___path = 'frontmatter.path',
  frontmatter___showInFooter = 'frontmatter.showInFooter',
  frontmatter___headerColour = 'frontmatter.headerColour',
  frontmatter___template = 'frontmatter.template',
  frontmatter___showInMenu = 'frontmatter.showInMenu',
  frontmatter___menuOrder = 'frontmatter.menuOrder',
  frontmatter___mainImage___sourceInstanceName = 'frontmatter.mainImage.sourceInstanceName',
  frontmatter___mainImage___absolutePath = 'frontmatter.mainImage.absolutePath',
  frontmatter___mainImage___relativePath = 'frontmatter.mainImage.relativePath',
  frontmatter___mainImage___extension = 'frontmatter.mainImage.extension',
  frontmatter___mainImage___size = 'frontmatter.mainImage.size',
  frontmatter___mainImage___prettySize = 'frontmatter.mainImage.prettySize',
  frontmatter___mainImage___modifiedTime = 'frontmatter.mainImage.modifiedTime',
  frontmatter___mainImage___accessTime = 'frontmatter.mainImage.accessTime',
  frontmatter___mainImage___changeTime = 'frontmatter.mainImage.changeTime',
  frontmatter___mainImage___birthTime = 'frontmatter.mainImage.birthTime',
  frontmatter___mainImage___root = 'frontmatter.mainImage.root',
  frontmatter___mainImage___dir = 'frontmatter.mainImage.dir',
  frontmatter___mainImage___base = 'frontmatter.mainImage.base',
  frontmatter___mainImage___ext = 'frontmatter.mainImage.ext',
  frontmatter___mainImage___name = 'frontmatter.mainImage.name',
  frontmatter___mainImage___relativeDirectory = 'frontmatter.mainImage.relativeDirectory',
  frontmatter___mainImage___dev = 'frontmatter.mainImage.dev',
  frontmatter___mainImage___mode = 'frontmatter.mainImage.mode',
  frontmatter___mainImage___nlink = 'frontmatter.mainImage.nlink',
  frontmatter___mainImage___uid = 'frontmatter.mainImage.uid',
  frontmatter___mainImage___gid = 'frontmatter.mainImage.gid',
  frontmatter___mainImage___rdev = 'frontmatter.mainImage.rdev',
  frontmatter___mainImage___ino = 'frontmatter.mainImage.ino',
  frontmatter___mainImage___atimeMs = 'frontmatter.mainImage.atimeMs',
  frontmatter___mainImage___mtimeMs = 'frontmatter.mainImage.mtimeMs',
  frontmatter___mainImage___ctimeMs = 'frontmatter.mainImage.ctimeMs',
  frontmatter___mainImage___atime = 'frontmatter.mainImage.atime',
  frontmatter___mainImage___mtime = 'frontmatter.mainImage.mtime',
  frontmatter___mainImage___ctime = 'frontmatter.mainImage.ctime',
  frontmatter___mainImage___birthtime = 'frontmatter.mainImage.birthtime',
  frontmatter___mainImage___birthtimeMs = 'frontmatter.mainImage.birthtimeMs',
  frontmatter___mainImage___blksize = 'frontmatter.mainImage.blksize',
  frontmatter___mainImage___blocks = 'frontmatter.mainImage.blocks',
  frontmatter___mainImage___publicURL = 'frontmatter.mainImage.publicURL',
  frontmatter___mainImage___childImageSharp___id = 'frontmatter.mainImage.childImageSharp.id',
  frontmatter___mainImage___childImageSharp___children = 'frontmatter.mainImage.childImageSharp.children',
  frontmatter___mainImage___id = 'frontmatter.mainImage.id',
  frontmatter___mainImage___parent___id = 'frontmatter.mainImage.parent.id',
  frontmatter___mainImage___parent___children = 'frontmatter.mainImage.parent.children',
  frontmatter___mainImage___children = 'frontmatter.mainImage.children',
  frontmatter___mainImage___children___id = 'frontmatter.mainImage.children.id',
  frontmatter___mainImage___children___children = 'frontmatter.mainImage.children.children',
  frontmatter___mainImage___internal___content = 'frontmatter.mainImage.internal.content',
  frontmatter___mainImage___internal___contentDigest = 'frontmatter.mainImage.internal.contentDigest',
  frontmatter___mainImage___internal___description = 'frontmatter.mainImage.internal.description',
  frontmatter___mainImage___internal___fieldOwners = 'frontmatter.mainImage.internal.fieldOwners',
  frontmatter___mainImage___internal___ignoreType = 'frontmatter.mainImage.internal.ignoreType',
  frontmatter___mainImage___internal___mediaType = 'frontmatter.mainImage.internal.mediaType',
  frontmatter___mainImage___internal___owner = 'frontmatter.mainImage.internal.owner',
  frontmatter___mainImage___internal___type = 'frontmatter.mainImage.internal.type',
  frontmatter___mainImage___childMarkdownRemark___id = 'frontmatter.mainImage.childMarkdownRemark.id',
  frontmatter___mainImage___childMarkdownRemark___excerpt = 'frontmatter.mainImage.childMarkdownRemark.excerpt',
  frontmatter___mainImage___childMarkdownRemark___rawMarkdownBody = 'frontmatter.mainImage.childMarkdownRemark.rawMarkdownBody',
  frontmatter___mainImage___childMarkdownRemark___fileAbsolutePath = 'frontmatter.mainImage.childMarkdownRemark.fileAbsolutePath',
  frontmatter___mainImage___childMarkdownRemark___html = 'frontmatter.mainImage.childMarkdownRemark.html',
  frontmatter___mainImage___childMarkdownRemark___htmlAst = 'frontmatter.mainImage.childMarkdownRemark.htmlAst',
  frontmatter___mainImage___childMarkdownRemark___excerptAst = 'frontmatter.mainImage.childMarkdownRemark.excerptAst',
  frontmatter___mainImage___childMarkdownRemark___headings = 'frontmatter.mainImage.childMarkdownRemark.headings',
  frontmatter___mainImage___childMarkdownRemark___timeToRead = 'frontmatter.mainImage.childMarkdownRemark.timeToRead',
  frontmatter___mainImage___childMarkdownRemark___tableOfContents = 'frontmatter.mainImage.childMarkdownRemark.tableOfContents',
  frontmatter___mainImage___childMarkdownRemark___children = 'frontmatter.mainImage.childMarkdownRemark.children',
  frontmatter___firstIntroImage___sourceInstanceName = 'frontmatter.firstIntroImage.sourceInstanceName',
  frontmatter___firstIntroImage___absolutePath = 'frontmatter.firstIntroImage.absolutePath',
  frontmatter___firstIntroImage___relativePath = 'frontmatter.firstIntroImage.relativePath',
  frontmatter___firstIntroImage___extension = 'frontmatter.firstIntroImage.extension',
  frontmatter___firstIntroImage___size = 'frontmatter.firstIntroImage.size',
  frontmatter___firstIntroImage___prettySize = 'frontmatter.firstIntroImage.prettySize',
  frontmatter___firstIntroImage___modifiedTime = 'frontmatter.firstIntroImage.modifiedTime',
  frontmatter___firstIntroImage___accessTime = 'frontmatter.firstIntroImage.accessTime',
  frontmatter___firstIntroImage___changeTime = 'frontmatter.firstIntroImage.changeTime',
  frontmatter___firstIntroImage___birthTime = 'frontmatter.firstIntroImage.birthTime',
  frontmatter___firstIntroImage___root = 'frontmatter.firstIntroImage.root',
  frontmatter___firstIntroImage___dir = 'frontmatter.firstIntroImage.dir',
  frontmatter___firstIntroImage___base = 'frontmatter.firstIntroImage.base',
  frontmatter___firstIntroImage___ext = 'frontmatter.firstIntroImage.ext',
  frontmatter___firstIntroImage___name = 'frontmatter.firstIntroImage.name',
  frontmatter___firstIntroImage___relativeDirectory = 'frontmatter.firstIntroImage.relativeDirectory',
  frontmatter___firstIntroImage___dev = 'frontmatter.firstIntroImage.dev',
  frontmatter___firstIntroImage___mode = 'frontmatter.firstIntroImage.mode',
  frontmatter___firstIntroImage___nlink = 'frontmatter.firstIntroImage.nlink',
  frontmatter___firstIntroImage___uid = 'frontmatter.firstIntroImage.uid',
  frontmatter___firstIntroImage___gid = 'frontmatter.firstIntroImage.gid',
  frontmatter___firstIntroImage___rdev = 'frontmatter.firstIntroImage.rdev',
  frontmatter___firstIntroImage___ino = 'frontmatter.firstIntroImage.ino',
  frontmatter___firstIntroImage___atimeMs = 'frontmatter.firstIntroImage.atimeMs',
  frontmatter___firstIntroImage___mtimeMs = 'frontmatter.firstIntroImage.mtimeMs',
  frontmatter___firstIntroImage___ctimeMs = 'frontmatter.firstIntroImage.ctimeMs',
  frontmatter___firstIntroImage___atime = 'frontmatter.firstIntroImage.atime',
  frontmatter___firstIntroImage___mtime = 'frontmatter.firstIntroImage.mtime',
  frontmatter___firstIntroImage___ctime = 'frontmatter.firstIntroImage.ctime',
  frontmatter___firstIntroImage___birthtime = 'frontmatter.firstIntroImage.birthtime',
  frontmatter___firstIntroImage___birthtimeMs = 'frontmatter.firstIntroImage.birthtimeMs',
  frontmatter___firstIntroImage___blksize = 'frontmatter.firstIntroImage.blksize',
  frontmatter___firstIntroImage___blocks = 'frontmatter.firstIntroImage.blocks',
  frontmatter___firstIntroImage___publicURL = 'frontmatter.firstIntroImage.publicURL',
  frontmatter___firstIntroImage___childImageSharp___id = 'frontmatter.firstIntroImage.childImageSharp.id',
  frontmatter___firstIntroImage___childImageSharp___children = 'frontmatter.firstIntroImage.childImageSharp.children',
  frontmatter___firstIntroImage___id = 'frontmatter.firstIntroImage.id',
  frontmatter___firstIntroImage___parent___id = 'frontmatter.firstIntroImage.parent.id',
  frontmatter___firstIntroImage___parent___children = 'frontmatter.firstIntroImage.parent.children',
  frontmatter___firstIntroImage___children = 'frontmatter.firstIntroImage.children',
  frontmatter___firstIntroImage___children___id = 'frontmatter.firstIntroImage.children.id',
  frontmatter___firstIntroImage___children___children = 'frontmatter.firstIntroImage.children.children',
  frontmatter___firstIntroImage___internal___content = 'frontmatter.firstIntroImage.internal.content',
  frontmatter___firstIntroImage___internal___contentDigest = 'frontmatter.firstIntroImage.internal.contentDigest',
  frontmatter___firstIntroImage___internal___description = 'frontmatter.firstIntroImage.internal.description',
  frontmatter___firstIntroImage___internal___fieldOwners = 'frontmatter.firstIntroImage.internal.fieldOwners',
  frontmatter___firstIntroImage___internal___ignoreType = 'frontmatter.firstIntroImage.internal.ignoreType',
  frontmatter___firstIntroImage___internal___mediaType = 'frontmatter.firstIntroImage.internal.mediaType',
  frontmatter___firstIntroImage___internal___owner = 'frontmatter.firstIntroImage.internal.owner',
  frontmatter___firstIntroImage___internal___type = 'frontmatter.firstIntroImage.internal.type',
  frontmatter___firstIntroImage___childMarkdownRemark___id = 'frontmatter.firstIntroImage.childMarkdownRemark.id',
  frontmatter___firstIntroImage___childMarkdownRemark___excerpt = 'frontmatter.firstIntroImage.childMarkdownRemark.excerpt',
  frontmatter___firstIntroImage___childMarkdownRemark___rawMarkdownBody = 'frontmatter.firstIntroImage.childMarkdownRemark.rawMarkdownBody',
  frontmatter___firstIntroImage___childMarkdownRemark___fileAbsolutePath = 'frontmatter.firstIntroImage.childMarkdownRemark.fileAbsolutePath',
  frontmatter___firstIntroImage___childMarkdownRemark___html = 'frontmatter.firstIntroImage.childMarkdownRemark.html',
  frontmatter___firstIntroImage___childMarkdownRemark___htmlAst = 'frontmatter.firstIntroImage.childMarkdownRemark.htmlAst',
  frontmatter___firstIntroImage___childMarkdownRemark___excerptAst = 'frontmatter.firstIntroImage.childMarkdownRemark.excerptAst',
  frontmatter___firstIntroImage___childMarkdownRemark___headings = 'frontmatter.firstIntroImage.childMarkdownRemark.headings',
  frontmatter___firstIntroImage___childMarkdownRemark___timeToRead = 'frontmatter.firstIntroImage.childMarkdownRemark.timeToRead',
  frontmatter___firstIntroImage___childMarkdownRemark___tableOfContents = 'frontmatter.firstIntroImage.childMarkdownRemark.tableOfContents',
  frontmatter___firstIntroImage___childMarkdownRemark___children = 'frontmatter.firstIntroImage.childMarkdownRemark.children',
  frontmatter___secondIntroImage___sourceInstanceName = 'frontmatter.secondIntroImage.sourceInstanceName',
  frontmatter___secondIntroImage___absolutePath = 'frontmatter.secondIntroImage.absolutePath',
  frontmatter___secondIntroImage___relativePath = 'frontmatter.secondIntroImage.relativePath',
  frontmatter___secondIntroImage___extension = 'frontmatter.secondIntroImage.extension',
  frontmatter___secondIntroImage___size = 'frontmatter.secondIntroImage.size',
  frontmatter___secondIntroImage___prettySize = 'frontmatter.secondIntroImage.prettySize',
  frontmatter___secondIntroImage___modifiedTime = 'frontmatter.secondIntroImage.modifiedTime',
  frontmatter___secondIntroImage___accessTime = 'frontmatter.secondIntroImage.accessTime',
  frontmatter___secondIntroImage___changeTime = 'frontmatter.secondIntroImage.changeTime',
  frontmatter___secondIntroImage___birthTime = 'frontmatter.secondIntroImage.birthTime',
  frontmatter___secondIntroImage___root = 'frontmatter.secondIntroImage.root',
  frontmatter___secondIntroImage___dir = 'frontmatter.secondIntroImage.dir',
  frontmatter___secondIntroImage___base = 'frontmatter.secondIntroImage.base',
  frontmatter___secondIntroImage___ext = 'frontmatter.secondIntroImage.ext',
  frontmatter___secondIntroImage___name = 'frontmatter.secondIntroImage.name',
  frontmatter___secondIntroImage___relativeDirectory = 'frontmatter.secondIntroImage.relativeDirectory',
  frontmatter___secondIntroImage___dev = 'frontmatter.secondIntroImage.dev',
  frontmatter___secondIntroImage___mode = 'frontmatter.secondIntroImage.mode',
  frontmatter___secondIntroImage___nlink = 'frontmatter.secondIntroImage.nlink',
  frontmatter___secondIntroImage___uid = 'frontmatter.secondIntroImage.uid',
  frontmatter___secondIntroImage___gid = 'frontmatter.secondIntroImage.gid',
  frontmatter___secondIntroImage___rdev = 'frontmatter.secondIntroImage.rdev',
  frontmatter___secondIntroImage___ino = 'frontmatter.secondIntroImage.ino',
  frontmatter___secondIntroImage___atimeMs = 'frontmatter.secondIntroImage.atimeMs',
  frontmatter___secondIntroImage___mtimeMs = 'frontmatter.secondIntroImage.mtimeMs',
  frontmatter___secondIntroImage___ctimeMs = 'frontmatter.secondIntroImage.ctimeMs',
  frontmatter___secondIntroImage___atime = 'frontmatter.secondIntroImage.atime',
  frontmatter___secondIntroImage___mtime = 'frontmatter.secondIntroImage.mtime',
  frontmatter___secondIntroImage___ctime = 'frontmatter.secondIntroImage.ctime',
  frontmatter___secondIntroImage___birthtime = 'frontmatter.secondIntroImage.birthtime',
  frontmatter___secondIntroImage___birthtimeMs = 'frontmatter.secondIntroImage.birthtimeMs',
  frontmatter___secondIntroImage___blksize = 'frontmatter.secondIntroImage.blksize',
  frontmatter___secondIntroImage___blocks = 'frontmatter.secondIntroImage.blocks',
  frontmatter___secondIntroImage___publicURL = 'frontmatter.secondIntroImage.publicURL',
  frontmatter___secondIntroImage___childImageSharp___id = 'frontmatter.secondIntroImage.childImageSharp.id',
  frontmatter___secondIntroImage___childImageSharp___children = 'frontmatter.secondIntroImage.childImageSharp.children',
  frontmatter___secondIntroImage___id = 'frontmatter.secondIntroImage.id',
  frontmatter___secondIntroImage___parent___id = 'frontmatter.secondIntroImage.parent.id',
  frontmatter___secondIntroImage___parent___children = 'frontmatter.secondIntroImage.parent.children',
  frontmatter___secondIntroImage___children = 'frontmatter.secondIntroImage.children',
  frontmatter___secondIntroImage___children___id = 'frontmatter.secondIntroImage.children.id',
  frontmatter___secondIntroImage___children___children = 'frontmatter.secondIntroImage.children.children',
  frontmatter___secondIntroImage___internal___content = 'frontmatter.secondIntroImage.internal.content',
  frontmatter___secondIntroImage___internal___contentDigest = 'frontmatter.secondIntroImage.internal.contentDigest',
  frontmatter___secondIntroImage___internal___description = 'frontmatter.secondIntroImage.internal.description',
  frontmatter___secondIntroImage___internal___fieldOwners = 'frontmatter.secondIntroImage.internal.fieldOwners',
  frontmatter___secondIntroImage___internal___ignoreType = 'frontmatter.secondIntroImage.internal.ignoreType',
  frontmatter___secondIntroImage___internal___mediaType = 'frontmatter.secondIntroImage.internal.mediaType',
  frontmatter___secondIntroImage___internal___owner = 'frontmatter.secondIntroImage.internal.owner',
  frontmatter___secondIntroImage___internal___type = 'frontmatter.secondIntroImage.internal.type',
  frontmatter___secondIntroImage___childMarkdownRemark___id = 'frontmatter.secondIntroImage.childMarkdownRemark.id',
  frontmatter___secondIntroImage___childMarkdownRemark___excerpt = 'frontmatter.secondIntroImage.childMarkdownRemark.excerpt',
  frontmatter___secondIntroImage___childMarkdownRemark___rawMarkdownBody = 'frontmatter.secondIntroImage.childMarkdownRemark.rawMarkdownBody',
  frontmatter___secondIntroImage___childMarkdownRemark___fileAbsolutePath = 'frontmatter.secondIntroImage.childMarkdownRemark.fileAbsolutePath',
  frontmatter___secondIntroImage___childMarkdownRemark___html = 'frontmatter.secondIntroImage.childMarkdownRemark.html',
  frontmatter___secondIntroImage___childMarkdownRemark___htmlAst = 'frontmatter.secondIntroImage.childMarkdownRemark.htmlAst',
  frontmatter___secondIntroImage___childMarkdownRemark___excerptAst = 'frontmatter.secondIntroImage.childMarkdownRemark.excerptAst',
  frontmatter___secondIntroImage___childMarkdownRemark___headings = 'frontmatter.secondIntroImage.childMarkdownRemark.headings',
  frontmatter___secondIntroImage___childMarkdownRemark___timeToRead = 'frontmatter.secondIntroImage.childMarkdownRemark.timeToRead',
  frontmatter___secondIntroImage___childMarkdownRemark___tableOfContents = 'frontmatter.secondIntroImage.childMarkdownRemark.tableOfContents',
  frontmatter___secondIntroImage___childMarkdownRemark___children = 'frontmatter.secondIntroImage.childMarkdownRemark.children',
  frontmatter___overlayCaption = 'frontmatter.overlayCaption',
  frontmatter___captionPosition = 'frontmatter.captionPosition',
  frontmatter___findOutMoreText = 'frontmatter.findOutMoreText',
  frontmatter___signupPlaceholder = 'frontmatter.signupPlaceholder',
  frontmatter___action = 'frontmatter.action',
  frontmatter___hiddenValue = 'frontmatter.hiddenValue',
  frontmatter___layout = 'frontmatter.layout',
  frontmatter___section = 'frontmatter.section',
  frontmatter___image___sourceInstanceName = 'frontmatter.image.sourceInstanceName',
  frontmatter___image___absolutePath = 'frontmatter.image.absolutePath',
  frontmatter___image___relativePath = 'frontmatter.image.relativePath',
  frontmatter___image___extension = 'frontmatter.image.extension',
  frontmatter___image___size = 'frontmatter.image.size',
  frontmatter___image___prettySize = 'frontmatter.image.prettySize',
  frontmatter___image___modifiedTime = 'frontmatter.image.modifiedTime',
  frontmatter___image___accessTime = 'frontmatter.image.accessTime',
  frontmatter___image___changeTime = 'frontmatter.image.changeTime',
  frontmatter___image___birthTime = 'frontmatter.image.birthTime',
  frontmatter___image___root = 'frontmatter.image.root',
  frontmatter___image___dir = 'frontmatter.image.dir',
  frontmatter___image___base = 'frontmatter.image.base',
  frontmatter___image___ext = 'frontmatter.image.ext',
  frontmatter___image___name = 'frontmatter.image.name',
  frontmatter___image___relativeDirectory = 'frontmatter.image.relativeDirectory',
  frontmatter___image___dev = 'frontmatter.image.dev',
  frontmatter___image___mode = 'frontmatter.image.mode',
  frontmatter___image___nlink = 'frontmatter.image.nlink',
  frontmatter___image___uid = 'frontmatter.image.uid',
  frontmatter___image___gid = 'frontmatter.image.gid',
  frontmatter___image___rdev = 'frontmatter.image.rdev',
  frontmatter___image___ino = 'frontmatter.image.ino',
  frontmatter___image___atimeMs = 'frontmatter.image.atimeMs',
  frontmatter___image___mtimeMs = 'frontmatter.image.mtimeMs',
  frontmatter___image___ctimeMs = 'frontmatter.image.ctimeMs',
  frontmatter___image___atime = 'frontmatter.image.atime',
  frontmatter___image___mtime = 'frontmatter.image.mtime',
  frontmatter___image___ctime = 'frontmatter.image.ctime',
  frontmatter___image___birthtime = 'frontmatter.image.birthtime',
  frontmatter___image___birthtimeMs = 'frontmatter.image.birthtimeMs',
  frontmatter___image___blksize = 'frontmatter.image.blksize',
  frontmatter___image___blocks = 'frontmatter.image.blocks',
  frontmatter___image___publicURL = 'frontmatter.image.publicURL',
  frontmatter___image___childImageSharp___id = 'frontmatter.image.childImageSharp.id',
  frontmatter___image___childImageSharp___children = 'frontmatter.image.childImageSharp.children',
  frontmatter___image___id = 'frontmatter.image.id',
  frontmatter___image___parent___id = 'frontmatter.image.parent.id',
  frontmatter___image___parent___children = 'frontmatter.image.parent.children',
  frontmatter___image___children = 'frontmatter.image.children',
  frontmatter___image___children___id = 'frontmatter.image.children.id',
  frontmatter___image___children___children = 'frontmatter.image.children.children',
  frontmatter___image___internal___content = 'frontmatter.image.internal.content',
  frontmatter___image___internal___contentDigest = 'frontmatter.image.internal.contentDigest',
  frontmatter___image___internal___description = 'frontmatter.image.internal.description',
  frontmatter___image___internal___fieldOwners = 'frontmatter.image.internal.fieldOwners',
  frontmatter___image___internal___ignoreType = 'frontmatter.image.internal.ignoreType',
  frontmatter___image___internal___mediaType = 'frontmatter.image.internal.mediaType',
  frontmatter___image___internal___owner = 'frontmatter.image.internal.owner',
  frontmatter___image___internal___type = 'frontmatter.image.internal.type',
  frontmatter___image___childMarkdownRemark___id = 'frontmatter.image.childMarkdownRemark.id',
  frontmatter___image___childMarkdownRemark___excerpt = 'frontmatter.image.childMarkdownRemark.excerpt',
  frontmatter___image___childMarkdownRemark___rawMarkdownBody = 'frontmatter.image.childMarkdownRemark.rawMarkdownBody',
  frontmatter___image___childMarkdownRemark___fileAbsolutePath = 'frontmatter.image.childMarkdownRemark.fileAbsolutePath',
  frontmatter___image___childMarkdownRemark___html = 'frontmatter.image.childMarkdownRemark.html',
  frontmatter___image___childMarkdownRemark___htmlAst = 'frontmatter.image.childMarkdownRemark.htmlAst',
  frontmatter___image___childMarkdownRemark___excerptAst = 'frontmatter.image.childMarkdownRemark.excerptAst',
  frontmatter___image___childMarkdownRemark___headings = 'frontmatter.image.childMarkdownRemark.headings',
  frontmatter___image___childMarkdownRemark___timeToRead = 'frontmatter.image.childMarkdownRemark.timeToRead',
  frontmatter___image___childMarkdownRemark___tableOfContents = 'frontmatter.image.childMarkdownRemark.tableOfContents',
  frontmatter___image___childMarkdownRemark___children = 'frontmatter.image.childMarkdownRemark.children',
  frontmatter___carouselImages = 'frontmatter.carouselImages',
  frontmatter___carouselImages___mainImage___sourceInstanceName = 'frontmatter.carouselImages.mainImage.sourceInstanceName',
  frontmatter___carouselImages___mainImage___absolutePath = 'frontmatter.carouselImages.mainImage.absolutePath',
  frontmatter___carouselImages___mainImage___relativePath = 'frontmatter.carouselImages.mainImage.relativePath',
  frontmatter___carouselImages___mainImage___extension = 'frontmatter.carouselImages.mainImage.extension',
  frontmatter___carouselImages___mainImage___size = 'frontmatter.carouselImages.mainImage.size',
  frontmatter___carouselImages___mainImage___prettySize = 'frontmatter.carouselImages.mainImage.prettySize',
  frontmatter___carouselImages___mainImage___modifiedTime = 'frontmatter.carouselImages.mainImage.modifiedTime',
  frontmatter___carouselImages___mainImage___accessTime = 'frontmatter.carouselImages.mainImage.accessTime',
  frontmatter___carouselImages___mainImage___changeTime = 'frontmatter.carouselImages.mainImage.changeTime',
  frontmatter___carouselImages___mainImage___birthTime = 'frontmatter.carouselImages.mainImage.birthTime',
  frontmatter___carouselImages___mainImage___root = 'frontmatter.carouselImages.mainImage.root',
  frontmatter___carouselImages___mainImage___dir = 'frontmatter.carouselImages.mainImage.dir',
  frontmatter___carouselImages___mainImage___base = 'frontmatter.carouselImages.mainImage.base',
  frontmatter___carouselImages___mainImage___ext = 'frontmatter.carouselImages.mainImage.ext',
  frontmatter___carouselImages___mainImage___name = 'frontmatter.carouselImages.mainImage.name',
  frontmatter___carouselImages___mainImage___relativeDirectory = 'frontmatter.carouselImages.mainImage.relativeDirectory',
  frontmatter___carouselImages___mainImage___dev = 'frontmatter.carouselImages.mainImage.dev',
  frontmatter___carouselImages___mainImage___mode = 'frontmatter.carouselImages.mainImage.mode',
  frontmatter___carouselImages___mainImage___nlink = 'frontmatter.carouselImages.mainImage.nlink',
  frontmatter___carouselImages___mainImage___uid = 'frontmatter.carouselImages.mainImage.uid',
  frontmatter___carouselImages___mainImage___gid = 'frontmatter.carouselImages.mainImage.gid',
  frontmatter___carouselImages___mainImage___rdev = 'frontmatter.carouselImages.mainImage.rdev',
  frontmatter___carouselImages___mainImage___ino = 'frontmatter.carouselImages.mainImage.ino',
  frontmatter___carouselImages___mainImage___atimeMs = 'frontmatter.carouselImages.mainImage.atimeMs',
  frontmatter___carouselImages___mainImage___mtimeMs = 'frontmatter.carouselImages.mainImage.mtimeMs',
  frontmatter___carouselImages___mainImage___ctimeMs = 'frontmatter.carouselImages.mainImage.ctimeMs',
  frontmatter___carouselImages___mainImage___atime = 'frontmatter.carouselImages.mainImage.atime',
  frontmatter___carouselImages___mainImage___mtime = 'frontmatter.carouselImages.mainImage.mtime',
  frontmatter___carouselImages___mainImage___ctime = 'frontmatter.carouselImages.mainImage.ctime',
  frontmatter___carouselImages___mainImage___birthtime = 'frontmatter.carouselImages.mainImage.birthtime',
  frontmatter___carouselImages___mainImage___birthtimeMs = 'frontmatter.carouselImages.mainImage.birthtimeMs',
  frontmatter___carouselImages___mainImage___blksize = 'frontmatter.carouselImages.mainImage.blksize',
  frontmatter___carouselImages___mainImage___blocks = 'frontmatter.carouselImages.mainImage.blocks',
  frontmatter___carouselImages___mainImage___publicURL = 'frontmatter.carouselImages.mainImage.publicURL',
  frontmatter___carouselImages___mainImage___id = 'frontmatter.carouselImages.mainImage.id',
  frontmatter___carouselImages___mainImage___children = 'frontmatter.carouselImages.mainImage.children',
  frontmatter___carouselImages___position = 'frontmatter.carouselImages.position',
  frontmatter___sitemap = 'frontmatter.sitemap',
  frontmatter___image_alignment_classes = 'frontmatter.image_alignment_classes',
  frontmatter___itunesPodcastURL = 'frontmatter.itunesPodcastURL',
  frontmatter___podcastURL = 'frontmatter.podcastURL',
  frontmatter___iosAppStoreLink = 'frontmatter.iosAppStoreLink',
  frontmatter___playStoreLink = 'frontmatter.playStoreLink',
  frontmatter___mobileImage = 'frontmatter.mobileImage',
  frontmatter___releases = 'frontmatter.releases',
  frontmatter___releases___title = 'frontmatter.releases.title',
  frontmatter___releases___type = 'frontmatter.releases.type',
  frontmatter___releases___date = 'frontmatter.releases.date',
  frontmatter___releases___coverImage___sourceInstanceName = 'frontmatter.releases.coverImage.sourceInstanceName',
  frontmatter___releases___coverImage___absolutePath = 'frontmatter.releases.coverImage.absolutePath',
  frontmatter___releases___coverImage___relativePath = 'frontmatter.releases.coverImage.relativePath',
  frontmatter___releases___coverImage___extension = 'frontmatter.releases.coverImage.extension',
  frontmatter___releases___coverImage___size = 'frontmatter.releases.coverImage.size',
  frontmatter___releases___coverImage___prettySize = 'frontmatter.releases.coverImage.prettySize',
  frontmatter___releases___coverImage___modifiedTime = 'frontmatter.releases.coverImage.modifiedTime',
  frontmatter___releases___coverImage___accessTime = 'frontmatter.releases.coverImage.accessTime',
  frontmatter___releases___coverImage___changeTime = 'frontmatter.releases.coverImage.changeTime',
  frontmatter___releases___coverImage___birthTime = 'frontmatter.releases.coverImage.birthTime',
  frontmatter___releases___coverImage___root = 'frontmatter.releases.coverImage.root',
  frontmatter___releases___coverImage___dir = 'frontmatter.releases.coverImage.dir',
  frontmatter___releases___coverImage___base = 'frontmatter.releases.coverImage.base',
  frontmatter___releases___coverImage___ext = 'frontmatter.releases.coverImage.ext',
  frontmatter___releases___coverImage___name = 'frontmatter.releases.coverImage.name',
  frontmatter___releases___coverImage___relativeDirectory = 'frontmatter.releases.coverImage.relativeDirectory',
  frontmatter___releases___coverImage___dev = 'frontmatter.releases.coverImage.dev',
  frontmatter___releases___coverImage___mode = 'frontmatter.releases.coverImage.mode',
  frontmatter___releases___coverImage___nlink = 'frontmatter.releases.coverImage.nlink',
  frontmatter___releases___coverImage___uid = 'frontmatter.releases.coverImage.uid',
  frontmatter___releases___coverImage___gid = 'frontmatter.releases.coverImage.gid',
  frontmatter___releases___coverImage___rdev = 'frontmatter.releases.coverImage.rdev',
  frontmatter___releases___coverImage___ino = 'frontmatter.releases.coverImage.ino',
  frontmatter___releases___coverImage___atimeMs = 'frontmatter.releases.coverImage.atimeMs',
  frontmatter___releases___coverImage___mtimeMs = 'frontmatter.releases.coverImage.mtimeMs',
  frontmatter___releases___coverImage___ctimeMs = 'frontmatter.releases.coverImage.ctimeMs',
  frontmatter___releases___coverImage___atime = 'frontmatter.releases.coverImage.atime',
  frontmatter___releases___coverImage___mtime = 'frontmatter.releases.coverImage.mtime',
  frontmatter___releases___coverImage___ctime = 'frontmatter.releases.coverImage.ctime',
  frontmatter___releases___coverImage___birthtime = 'frontmatter.releases.coverImage.birthtime',
  frontmatter___releases___coverImage___birthtimeMs = 'frontmatter.releases.coverImage.birthtimeMs',
  frontmatter___releases___coverImage___blksize = 'frontmatter.releases.coverImage.blksize',
  frontmatter___releases___coverImage___blocks = 'frontmatter.releases.coverImage.blocks',
  frontmatter___releases___coverImage___publicURL = 'frontmatter.releases.coverImage.publicURL',
  frontmatter___releases___coverImage___id = 'frontmatter.releases.coverImage.id',
  frontmatter___releases___coverImage___children = 'frontmatter.releases.coverImage.children',
  frontmatter___releases___appleMusicLink = 'frontmatter.releases.appleMusicLink',
  frontmatter___releases___spotifyLink = 'frontmatter.releases.spotifyLink',
  frontmatter___resources = 'frontmatter.resources',
  frontmatter___resources___title = 'frontmatter.resources.title',
  frontmatter___resources___files = 'frontmatter.resources.files',
  frontmatter___resources___files___name = 'frontmatter.resources.files.name',
  frontmatter___resources___files___url = 'frontmatter.resources.files.url',
  frontmatter___dayOfWeek = 'frontmatter.dayOfWeek',
  frontmatter___type = 'frontmatter.type',
  frontmatter___time = 'frontmatter.time',
  frontmatter___timeOfDay = 'frontmatter.timeOfDay',
  frontmatter___name = 'frontmatter.name',
  frontmatter___status = 'frontmatter.status',
  frontmatter___backgroundColour = 'frontmatter.backgroundColour',
  frontmatter___textColour = 'frontmatter.textColour',
  frontmatter___eventType = 'frontmatter.eventType',
  frontmatter___events = 'frontmatter.events',
  frontmatter___events___title = 'frontmatter.events.title',
  frontmatter___events___description = 'frontmatter.events.description',
  frontmatter___events___date = 'frontmatter.events.date',
  frontmatter___events___time = 'frontmatter.events.time',
  frontmatter___events___expires = 'frontmatter.events.expires',
  frontmatter___events___tags = 'frontmatter.events.tags',
  frontmatter___events___links___facebook = 'frontmatter.events.links.facebook',
  frontmatter___events___links___youtube = 'frontmatter.events.links.youtube',
  frontmatter___order = 'frontmatter.order',
  frontmatter___lastUpdated = 'frontmatter.lastUpdated',
  frontmatter___features = 'frontmatter.features',
  frontmatter___features___title = 'frontmatter.features.title',
  frontmatter___features___description = 'frontmatter.features.description',
  frontmatter___features___buttonText = 'frontmatter.features.buttonText',
  frontmatter___features___buttonLink = 'frontmatter.features.buttonLink',
  frontmatter___tagLine = 'frontmatter.tagLine',
  frontmatter___eventDate = 'frontmatter.eventDate',
  frontmatter___price = 'frontmatter.price',
  frontmatter___signUpEmail = 'frontmatter.signUpEmail',
  frontmatter___leader = 'frontmatter.leader',
  frontmatter___people = 'frontmatter.people',
  frontmatter___people___name = 'frontmatter.people.name',
  frontmatter___people___title = 'frontmatter.people.title',
  frontmatter___people___photo = 'frontmatter.people.photo',
  frontmatter___people___headshot_position = 'frontmatter.people.headshot_position',
  frontmatter___findOutMoreLink = 'frontmatter.findOutMoreLink',
  frontmatter___style_classes = 'frontmatter.style_classes',
  frontmatter___imageObjectPosition = 'frontmatter.imageObjectPosition',
  frontmatter___fullBleed = 'frontmatter.fullBleed',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  fileAbsolutePath = 'fileAbsolutePath',
  fields___frontmattermd___findOutMoreText___id = 'fields.frontmattermd.findOutMoreText.id',
  fields___frontmattermd___findOutMoreText___excerpt = 'fields.frontmattermd.findOutMoreText.excerpt',
  fields___frontmattermd___findOutMoreText___rawMarkdownBody = 'fields.frontmattermd.findOutMoreText.rawMarkdownBody',
  fields___frontmattermd___findOutMoreText___fileAbsolutePath = 'fields.frontmattermd.findOutMoreText.fileAbsolutePath',
  fields___frontmattermd___findOutMoreText___html = 'fields.frontmattermd.findOutMoreText.html',
  fields___frontmattermd___findOutMoreText___htmlAst = 'fields.frontmattermd.findOutMoreText.htmlAst',
  fields___frontmattermd___findOutMoreText___excerptAst = 'fields.frontmattermd.findOutMoreText.excerptAst',
  fields___frontmattermd___findOutMoreText___headings = 'fields.frontmattermd.findOutMoreText.headings',
  fields___frontmattermd___findOutMoreText___timeToRead = 'fields.frontmattermd.findOutMoreText.timeToRead',
  fields___frontmattermd___findOutMoreText___tableOfContents = 'fields.frontmattermd.findOutMoreText.tableOfContents',
  fields___frontmattermd___findOutMoreText___children = 'fields.frontmattermd.findOutMoreText.children',
  html = 'html',
  htmlAst = 'htmlAst',
  excerptAst = 'excerptAst',
  headings = 'headings',
  headings___value = 'headings.value',
  headings___depth = 'headings.depth',
  timeToRead = 'timeToRead',
  tableOfContents = 'tableOfContents',
  wordCount___paragraphs = 'wordCount.paragraphs',
  wordCount___sentences = 'wordCount.sentences',
  wordCount___words = 'wordCount.words',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  childFrontmatterMarkdownFile___id = 'childFrontmatterMarkdownFile.id',
  childFrontmatterMarkdownFile___parent___id = 'childFrontmatterMarkdownFile.parent.id',
  childFrontmatterMarkdownFile___parent___parent___id = 'childFrontmatterMarkdownFile.parent.parent.id',
  childFrontmatterMarkdownFile___parent___parent___children = 'childFrontmatterMarkdownFile.parent.parent.children',
  childFrontmatterMarkdownFile___parent___children = 'childFrontmatterMarkdownFile.parent.children',
  childFrontmatterMarkdownFile___parent___children___id = 'childFrontmatterMarkdownFile.parent.children.id',
  childFrontmatterMarkdownFile___parent___children___children = 'childFrontmatterMarkdownFile.parent.children.children',
  childFrontmatterMarkdownFile___parent___internal___content = 'childFrontmatterMarkdownFile.parent.internal.content',
  childFrontmatterMarkdownFile___parent___internal___contentDigest = 'childFrontmatterMarkdownFile.parent.internal.contentDigest',
  childFrontmatterMarkdownFile___parent___internal___description = 'childFrontmatterMarkdownFile.parent.internal.description',
  childFrontmatterMarkdownFile___parent___internal___fieldOwners = 'childFrontmatterMarkdownFile.parent.internal.fieldOwners',
  childFrontmatterMarkdownFile___parent___internal___ignoreType = 'childFrontmatterMarkdownFile.parent.internal.ignoreType',
  childFrontmatterMarkdownFile___parent___internal___mediaType = 'childFrontmatterMarkdownFile.parent.internal.mediaType',
  childFrontmatterMarkdownFile___parent___internal___owner = 'childFrontmatterMarkdownFile.parent.internal.owner',
  childFrontmatterMarkdownFile___parent___internal___type = 'childFrontmatterMarkdownFile.parent.internal.type',
  childFrontmatterMarkdownFile___children = 'childFrontmatterMarkdownFile.children',
  childFrontmatterMarkdownFile___children___id = 'childFrontmatterMarkdownFile.children.id',
  childFrontmatterMarkdownFile___children___parent___id = 'childFrontmatterMarkdownFile.children.parent.id',
  childFrontmatterMarkdownFile___children___parent___children = 'childFrontmatterMarkdownFile.children.parent.children',
  childFrontmatterMarkdownFile___children___children = 'childFrontmatterMarkdownFile.children.children',
  childFrontmatterMarkdownFile___children___children___id = 'childFrontmatterMarkdownFile.children.children.id',
  childFrontmatterMarkdownFile___children___children___children = 'childFrontmatterMarkdownFile.children.children.children',
  childFrontmatterMarkdownFile___children___internal___content = 'childFrontmatterMarkdownFile.children.internal.content',
  childFrontmatterMarkdownFile___children___internal___contentDigest = 'childFrontmatterMarkdownFile.children.internal.contentDigest',
  childFrontmatterMarkdownFile___children___internal___description = 'childFrontmatterMarkdownFile.children.internal.description',
  childFrontmatterMarkdownFile___children___internal___fieldOwners = 'childFrontmatterMarkdownFile.children.internal.fieldOwners',
  childFrontmatterMarkdownFile___children___internal___ignoreType = 'childFrontmatterMarkdownFile.children.internal.ignoreType',
  childFrontmatterMarkdownFile___children___internal___mediaType = 'childFrontmatterMarkdownFile.children.internal.mediaType',
  childFrontmatterMarkdownFile___children___internal___owner = 'childFrontmatterMarkdownFile.children.internal.owner',
  childFrontmatterMarkdownFile___children___internal___type = 'childFrontmatterMarkdownFile.children.internal.type',
  childFrontmatterMarkdownFile___internal___content = 'childFrontmatterMarkdownFile.internal.content',
  childFrontmatterMarkdownFile___internal___contentDigest = 'childFrontmatterMarkdownFile.internal.contentDigest',
  childFrontmatterMarkdownFile___internal___description = 'childFrontmatterMarkdownFile.internal.description',
  childFrontmatterMarkdownFile___internal___fieldOwners = 'childFrontmatterMarkdownFile.internal.fieldOwners',
  childFrontmatterMarkdownFile___internal___ignoreType = 'childFrontmatterMarkdownFile.internal.ignoreType',
  childFrontmatterMarkdownFile___internal___mediaType = 'childFrontmatterMarkdownFile.internal.mediaType',
  childFrontmatterMarkdownFile___internal___owner = 'childFrontmatterMarkdownFile.internal.owner',
  childFrontmatterMarkdownFile___internal___type = 'childFrontmatterMarkdownFile.internal.type',
  childFrontmatterMarkdownFile___sourceInstanceName = 'childFrontmatterMarkdownFile.sourceInstanceName',
  childFrontmatterMarkdownFile___absolutePath = 'childFrontmatterMarkdownFile.absolutePath',
  childFrontmatterMarkdownFile___relativePath___sourceInstanceName = 'childFrontmatterMarkdownFile.relativePath.sourceInstanceName',
  childFrontmatterMarkdownFile___relativePath___absolutePath = 'childFrontmatterMarkdownFile.relativePath.absolutePath',
  childFrontmatterMarkdownFile___relativePath___relativePath = 'childFrontmatterMarkdownFile.relativePath.relativePath',
  childFrontmatterMarkdownFile___relativePath___extension = 'childFrontmatterMarkdownFile.relativePath.extension',
  childFrontmatterMarkdownFile___relativePath___size = 'childFrontmatterMarkdownFile.relativePath.size',
  childFrontmatterMarkdownFile___relativePath___prettySize = 'childFrontmatterMarkdownFile.relativePath.prettySize',
  childFrontmatterMarkdownFile___relativePath___modifiedTime = 'childFrontmatterMarkdownFile.relativePath.modifiedTime',
  childFrontmatterMarkdownFile___relativePath___accessTime = 'childFrontmatterMarkdownFile.relativePath.accessTime',
  childFrontmatterMarkdownFile___relativePath___changeTime = 'childFrontmatterMarkdownFile.relativePath.changeTime',
  childFrontmatterMarkdownFile___relativePath___birthTime = 'childFrontmatterMarkdownFile.relativePath.birthTime',
  childFrontmatterMarkdownFile___relativePath___root = 'childFrontmatterMarkdownFile.relativePath.root',
  childFrontmatterMarkdownFile___relativePath___dir = 'childFrontmatterMarkdownFile.relativePath.dir',
  childFrontmatterMarkdownFile___relativePath___base = 'childFrontmatterMarkdownFile.relativePath.base',
  childFrontmatterMarkdownFile___relativePath___ext = 'childFrontmatterMarkdownFile.relativePath.ext',
  childFrontmatterMarkdownFile___relativePath___name = 'childFrontmatterMarkdownFile.relativePath.name',
  childFrontmatterMarkdownFile___relativePath___relativeDirectory = 'childFrontmatterMarkdownFile.relativePath.relativeDirectory',
  childFrontmatterMarkdownFile___relativePath___dev = 'childFrontmatterMarkdownFile.relativePath.dev',
  childFrontmatterMarkdownFile___relativePath___mode = 'childFrontmatterMarkdownFile.relativePath.mode',
  childFrontmatterMarkdownFile___relativePath___nlink = 'childFrontmatterMarkdownFile.relativePath.nlink',
  childFrontmatterMarkdownFile___relativePath___uid = 'childFrontmatterMarkdownFile.relativePath.uid',
  childFrontmatterMarkdownFile___relativePath___gid = 'childFrontmatterMarkdownFile.relativePath.gid',
  childFrontmatterMarkdownFile___relativePath___rdev = 'childFrontmatterMarkdownFile.relativePath.rdev',
  childFrontmatterMarkdownFile___relativePath___ino = 'childFrontmatterMarkdownFile.relativePath.ino',
  childFrontmatterMarkdownFile___relativePath___atimeMs = 'childFrontmatterMarkdownFile.relativePath.atimeMs',
  childFrontmatterMarkdownFile___relativePath___mtimeMs = 'childFrontmatterMarkdownFile.relativePath.mtimeMs',
  childFrontmatterMarkdownFile___relativePath___ctimeMs = 'childFrontmatterMarkdownFile.relativePath.ctimeMs',
  childFrontmatterMarkdownFile___relativePath___atime = 'childFrontmatterMarkdownFile.relativePath.atime',
  childFrontmatterMarkdownFile___relativePath___mtime = 'childFrontmatterMarkdownFile.relativePath.mtime',
  childFrontmatterMarkdownFile___relativePath___ctime = 'childFrontmatterMarkdownFile.relativePath.ctime',
  childFrontmatterMarkdownFile___relativePath___birthtime = 'childFrontmatterMarkdownFile.relativePath.birthtime',
  childFrontmatterMarkdownFile___relativePath___birthtimeMs = 'childFrontmatterMarkdownFile.relativePath.birthtimeMs',
  childFrontmatterMarkdownFile___relativePath___blksize = 'childFrontmatterMarkdownFile.relativePath.blksize',
  childFrontmatterMarkdownFile___relativePath___blocks = 'childFrontmatterMarkdownFile.relativePath.blocks',
  childFrontmatterMarkdownFile___relativePath___publicURL = 'childFrontmatterMarkdownFile.relativePath.publicURL',
  childFrontmatterMarkdownFile___relativePath___childImageSharp___id = 'childFrontmatterMarkdownFile.relativePath.childImageSharp.id',
  childFrontmatterMarkdownFile___relativePath___childImageSharp___children = 'childFrontmatterMarkdownFile.relativePath.childImageSharp.children',
  childFrontmatterMarkdownFile___relativePath___id = 'childFrontmatterMarkdownFile.relativePath.id',
  childFrontmatterMarkdownFile___relativePath___parent___id = 'childFrontmatterMarkdownFile.relativePath.parent.id',
  childFrontmatterMarkdownFile___relativePath___parent___children = 'childFrontmatterMarkdownFile.relativePath.parent.children',
  childFrontmatterMarkdownFile___relativePath___children = 'childFrontmatterMarkdownFile.relativePath.children',
  childFrontmatterMarkdownFile___relativePath___children___id = 'childFrontmatterMarkdownFile.relativePath.children.id',
  childFrontmatterMarkdownFile___relativePath___children___children = 'childFrontmatterMarkdownFile.relativePath.children.children',
  childFrontmatterMarkdownFile___relativePath___internal___content = 'childFrontmatterMarkdownFile.relativePath.internal.content',
  childFrontmatterMarkdownFile___relativePath___internal___contentDigest = 'childFrontmatterMarkdownFile.relativePath.internal.contentDigest',
  childFrontmatterMarkdownFile___relativePath___internal___description = 'childFrontmatterMarkdownFile.relativePath.internal.description',
  childFrontmatterMarkdownFile___relativePath___internal___fieldOwners = 'childFrontmatterMarkdownFile.relativePath.internal.fieldOwners',
  childFrontmatterMarkdownFile___relativePath___internal___ignoreType = 'childFrontmatterMarkdownFile.relativePath.internal.ignoreType',
  childFrontmatterMarkdownFile___relativePath___internal___mediaType = 'childFrontmatterMarkdownFile.relativePath.internal.mediaType',
  childFrontmatterMarkdownFile___relativePath___internal___owner = 'childFrontmatterMarkdownFile.relativePath.internal.owner',
  childFrontmatterMarkdownFile___relativePath___internal___type = 'childFrontmatterMarkdownFile.relativePath.internal.type',
  childFrontmatterMarkdownFile___relativePath___childMarkdownRemark___id = 'childFrontmatterMarkdownFile.relativePath.childMarkdownRemark.id',
  childFrontmatterMarkdownFile___relativePath___childMarkdownRemark___excerpt = 'childFrontmatterMarkdownFile.relativePath.childMarkdownRemark.excerpt',
  childFrontmatterMarkdownFile___relativePath___childMarkdownRemark___rawMarkdownBody = 'childFrontmatterMarkdownFile.relativePath.childMarkdownRemark.rawMarkdownBody',
  childFrontmatterMarkdownFile___relativePath___childMarkdownRemark___fileAbsolutePath = 'childFrontmatterMarkdownFile.relativePath.childMarkdownRemark.fileAbsolutePath',
  childFrontmatterMarkdownFile___relativePath___childMarkdownRemark___html = 'childFrontmatterMarkdownFile.relativePath.childMarkdownRemark.html',
  childFrontmatterMarkdownFile___relativePath___childMarkdownRemark___htmlAst = 'childFrontmatterMarkdownFile.relativePath.childMarkdownRemark.htmlAst',
  childFrontmatterMarkdownFile___relativePath___childMarkdownRemark___excerptAst = 'childFrontmatterMarkdownFile.relativePath.childMarkdownRemark.excerptAst',
  childFrontmatterMarkdownFile___relativePath___childMarkdownRemark___headings = 'childFrontmatterMarkdownFile.relativePath.childMarkdownRemark.headings',
  childFrontmatterMarkdownFile___relativePath___childMarkdownRemark___timeToRead = 'childFrontmatterMarkdownFile.relativePath.childMarkdownRemark.timeToRead',
  childFrontmatterMarkdownFile___relativePath___childMarkdownRemark___tableOfContents = 'childFrontmatterMarkdownFile.relativePath.childMarkdownRemark.tableOfContents',
  childFrontmatterMarkdownFile___relativePath___childMarkdownRemark___children = 'childFrontmatterMarkdownFile.relativePath.childMarkdownRemark.children',
  childFrontmatterMarkdownFile___extension = 'childFrontmatterMarkdownFile.extension',
  childFrontmatterMarkdownFile___size = 'childFrontmatterMarkdownFile.size',
  childFrontmatterMarkdownFile___prettySize = 'childFrontmatterMarkdownFile.prettySize',
  childFrontmatterMarkdownFile___modifiedTime = 'childFrontmatterMarkdownFile.modifiedTime',
  childFrontmatterMarkdownFile___accessTime = 'childFrontmatterMarkdownFile.accessTime',
  childFrontmatterMarkdownFile___changeTime = 'childFrontmatterMarkdownFile.changeTime',
  childFrontmatterMarkdownFile___birthTime = 'childFrontmatterMarkdownFile.birthTime',
  childFrontmatterMarkdownFile___root = 'childFrontmatterMarkdownFile.root',
  childFrontmatterMarkdownFile___dir = 'childFrontmatterMarkdownFile.dir',
  childFrontmatterMarkdownFile___base___sourceInstanceName = 'childFrontmatterMarkdownFile.base.sourceInstanceName',
  childFrontmatterMarkdownFile___base___absolutePath = 'childFrontmatterMarkdownFile.base.absolutePath',
  childFrontmatterMarkdownFile___base___relativePath = 'childFrontmatterMarkdownFile.base.relativePath',
  childFrontmatterMarkdownFile___base___extension = 'childFrontmatterMarkdownFile.base.extension',
  childFrontmatterMarkdownFile___base___size = 'childFrontmatterMarkdownFile.base.size',
  childFrontmatterMarkdownFile___base___prettySize = 'childFrontmatterMarkdownFile.base.prettySize',
  childFrontmatterMarkdownFile___base___modifiedTime = 'childFrontmatterMarkdownFile.base.modifiedTime',
  childFrontmatterMarkdownFile___base___accessTime = 'childFrontmatterMarkdownFile.base.accessTime',
  childFrontmatterMarkdownFile___base___changeTime = 'childFrontmatterMarkdownFile.base.changeTime',
  childFrontmatterMarkdownFile___base___birthTime = 'childFrontmatterMarkdownFile.base.birthTime',
  childFrontmatterMarkdownFile___base___root = 'childFrontmatterMarkdownFile.base.root',
  childFrontmatterMarkdownFile___base___dir = 'childFrontmatterMarkdownFile.base.dir',
  childFrontmatterMarkdownFile___base___base = 'childFrontmatterMarkdownFile.base.base',
  childFrontmatterMarkdownFile___base___ext = 'childFrontmatterMarkdownFile.base.ext',
  childFrontmatterMarkdownFile___base___name = 'childFrontmatterMarkdownFile.base.name',
  childFrontmatterMarkdownFile___base___relativeDirectory = 'childFrontmatterMarkdownFile.base.relativeDirectory',
  childFrontmatterMarkdownFile___base___dev = 'childFrontmatterMarkdownFile.base.dev',
  childFrontmatterMarkdownFile___base___mode = 'childFrontmatterMarkdownFile.base.mode',
  childFrontmatterMarkdownFile___base___nlink = 'childFrontmatterMarkdownFile.base.nlink',
  childFrontmatterMarkdownFile___base___uid = 'childFrontmatterMarkdownFile.base.uid',
  childFrontmatterMarkdownFile___base___gid = 'childFrontmatterMarkdownFile.base.gid',
  childFrontmatterMarkdownFile___base___rdev = 'childFrontmatterMarkdownFile.base.rdev',
  childFrontmatterMarkdownFile___base___ino = 'childFrontmatterMarkdownFile.base.ino',
  childFrontmatterMarkdownFile___base___atimeMs = 'childFrontmatterMarkdownFile.base.atimeMs',
  childFrontmatterMarkdownFile___base___mtimeMs = 'childFrontmatterMarkdownFile.base.mtimeMs',
  childFrontmatterMarkdownFile___base___ctimeMs = 'childFrontmatterMarkdownFile.base.ctimeMs',
  childFrontmatterMarkdownFile___base___atime = 'childFrontmatterMarkdownFile.base.atime',
  childFrontmatterMarkdownFile___base___mtime = 'childFrontmatterMarkdownFile.base.mtime',
  childFrontmatterMarkdownFile___base___ctime = 'childFrontmatterMarkdownFile.base.ctime',
  childFrontmatterMarkdownFile___base___birthtime = 'childFrontmatterMarkdownFile.base.birthtime',
  childFrontmatterMarkdownFile___base___birthtimeMs = 'childFrontmatterMarkdownFile.base.birthtimeMs',
  childFrontmatterMarkdownFile___base___blksize = 'childFrontmatterMarkdownFile.base.blksize',
  childFrontmatterMarkdownFile___base___blocks = 'childFrontmatterMarkdownFile.base.blocks',
  childFrontmatterMarkdownFile___base___publicURL = 'childFrontmatterMarkdownFile.base.publicURL',
  childFrontmatterMarkdownFile___base___childImageSharp___id = 'childFrontmatterMarkdownFile.base.childImageSharp.id',
  childFrontmatterMarkdownFile___base___childImageSharp___children = 'childFrontmatterMarkdownFile.base.childImageSharp.children',
  childFrontmatterMarkdownFile___base___id = 'childFrontmatterMarkdownFile.base.id',
  childFrontmatterMarkdownFile___base___parent___id = 'childFrontmatterMarkdownFile.base.parent.id',
  childFrontmatterMarkdownFile___base___parent___children = 'childFrontmatterMarkdownFile.base.parent.children',
  childFrontmatterMarkdownFile___base___children = 'childFrontmatterMarkdownFile.base.children',
  childFrontmatterMarkdownFile___base___children___id = 'childFrontmatterMarkdownFile.base.children.id',
  childFrontmatterMarkdownFile___base___children___children = 'childFrontmatterMarkdownFile.base.children.children',
  childFrontmatterMarkdownFile___base___internal___content = 'childFrontmatterMarkdownFile.base.internal.content',
  childFrontmatterMarkdownFile___base___internal___contentDigest = 'childFrontmatterMarkdownFile.base.internal.contentDigest',
  childFrontmatterMarkdownFile___base___internal___description = 'childFrontmatterMarkdownFile.base.internal.description',
  childFrontmatterMarkdownFile___base___internal___fieldOwners = 'childFrontmatterMarkdownFile.base.internal.fieldOwners',
  childFrontmatterMarkdownFile___base___internal___ignoreType = 'childFrontmatterMarkdownFile.base.internal.ignoreType',
  childFrontmatterMarkdownFile___base___internal___mediaType = 'childFrontmatterMarkdownFile.base.internal.mediaType',
  childFrontmatterMarkdownFile___base___internal___owner = 'childFrontmatterMarkdownFile.base.internal.owner',
  childFrontmatterMarkdownFile___base___internal___type = 'childFrontmatterMarkdownFile.base.internal.type',
  childFrontmatterMarkdownFile___base___childMarkdownRemark___id = 'childFrontmatterMarkdownFile.base.childMarkdownRemark.id',
  childFrontmatterMarkdownFile___base___childMarkdownRemark___excerpt = 'childFrontmatterMarkdownFile.base.childMarkdownRemark.excerpt',
  childFrontmatterMarkdownFile___base___childMarkdownRemark___rawMarkdownBody = 'childFrontmatterMarkdownFile.base.childMarkdownRemark.rawMarkdownBody',
  childFrontmatterMarkdownFile___base___childMarkdownRemark___fileAbsolutePath = 'childFrontmatterMarkdownFile.base.childMarkdownRemark.fileAbsolutePath',
  childFrontmatterMarkdownFile___base___childMarkdownRemark___html = 'childFrontmatterMarkdownFile.base.childMarkdownRemark.html',
  childFrontmatterMarkdownFile___base___childMarkdownRemark___htmlAst = 'childFrontmatterMarkdownFile.base.childMarkdownRemark.htmlAst',
  childFrontmatterMarkdownFile___base___childMarkdownRemark___excerptAst = 'childFrontmatterMarkdownFile.base.childMarkdownRemark.excerptAst',
  childFrontmatterMarkdownFile___base___childMarkdownRemark___headings = 'childFrontmatterMarkdownFile.base.childMarkdownRemark.headings',
  childFrontmatterMarkdownFile___base___childMarkdownRemark___timeToRead = 'childFrontmatterMarkdownFile.base.childMarkdownRemark.timeToRead',
  childFrontmatterMarkdownFile___base___childMarkdownRemark___tableOfContents = 'childFrontmatterMarkdownFile.base.childMarkdownRemark.tableOfContents',
  childFrontmatterMarkdownFile___base___childMarkdownRemark___children = 'childFrontmatterMarkdownFile.base.childMarkdownRemark.children',
  childFrontmatterMarkdownFile___ext = 'childFrontmatterMarkdownFile.ext',
  childFrontmatterMarkdownFile___name = 'childFrontmatterMarkdownFile.name',
  childFrontmatterMarkdownFile___relativeDirectory = 'childFrontmatterMarkdownFile.relativeDirectory',
  childFrontmatterMarkdownFile___dev = 'childFrontmatterMarkdownFile.dev',
  childFrontmatterMarkdownFile___mode = 'childFrontmatterMarkdownFile.mode',
  childFrontmatterMarkdownFile___nlink = 'childFrontmatterMarkdownFile.nlink',
  childFrontmatterMarkdownFile___uid = 'childFrontmatterMarkdownFile.uid',
  childFrontmatterMarkdownFile___gid = 'childFrontmatterMarkdownFile.gid',
  childFrontmatterMarkdownFile___rdev = 'childFrontmatterMarkdownFile.rdev',
  childFrontmatterMarkdownFile___blksize = 'childFrontmatterMarkdownFile.blksize',
  childFrontmatterMarkdownFile___ino = 'childFrontmatterMarkdownFile.ino',
  childFrontmatterMarkdownFile___blocks = 'childFrontmatterMarkdownFile.blocks',
  childFrontmatterMarkdownFile___atimeMs = 'childFrontmatterMarkdownFile.atimeMs',
  childFrontmatterMarkdownFile___mtimeMs = 'childFrontmatterMarkdownFile.mtimeMs',
  childFrontmatterMarkdownFile___ctimeMs = 'childFrontmatterMarkdownFile.ctimeMs',
  childFrontmatterMarkdownFile___birthtimeMs = 'childFrontmatterMarkdownFile.birthtimeMs',
  childFrontmatterMarkdownFile___atime = 'childFrontmatterMarkdownFile.atime',
  childFrontmatterMarkdownFile___mtime = 'childFrontmatterMarkdownFile.mtime',
  childFrontmatterMarkdownFile___ctime = 'childFrontmatterMarkdownFile.ctime',
  childFrontmatterMarkdownFile___birthtime = 'childFrontmatterMarkdownFile.birthtime',
  childFrontmatterMarkdownFile___frontmatterField = 'childFrontmatterMarkdownFile.frontmatterField',
  childFrontmatterMarkdownFile___frontmatterValue = 'childFrontmatterMarkdownFile.frontmatterValue',
  childFrontmatterMarkdownFile___childMarkdownRemark___id = 'childFrontmatterMarkdownFile.childMarkdownRemark.id',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___title = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.title',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___path = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.path',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___showInFooter = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.showInFooter',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___headerColour = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.headerColour',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___template = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.template',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___showInMenu = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.showInMenu',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___menuOrder = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.menuOrder',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___overlayCaption = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.overlayCaption',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___captionPosition = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.captionPosition',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___findOutMoreText = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.findOutMoreText',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___signupPlaceholder = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.signupPlaceholder',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___action = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.action',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___hiddenValue = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.hiddenValue',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___layout = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.layout',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___section = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.section',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___carouselImages = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.carouselImages',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___sitemap = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.sitemap',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___image_alignment_classes = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.image_alignment_classes',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___itunesPodcastURL = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.itunesPodcastURL',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___podcastURL = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.podcastURL',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___iosAppStoreLink = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.iosAppStoreLink',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___playStoreLink = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.playStoreLink',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___mobileImage = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.mobileImage',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___releases = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.releases',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___resources = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.resources',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___dayOfWeek = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.dayOfWeek',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___type = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.type',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___time = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.time',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___timeOfDay = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.timeOfDay',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___name = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.name',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___status = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.status',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___backgroundColour = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.backgroundColour',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___textColour = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.textColour',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___eventType = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.eventType',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___events = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.events',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___order = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.order',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___lastUpdated = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.lastUpdated',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___features = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.features',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___tagLine = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.tagLine',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___eventDate = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.eventDate',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___price = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.price',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___signUpEmail = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.signUpEmail',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___leader = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.leader',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___people = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.people',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___findOutMoreLink = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.findOutMoreLink',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___style_classes = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.style_classes',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___imageObjectPosition = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.imageObjectPosition',
  childFrontmatterMarkdownFile___childMarkdownRemark___frontmatter___fullBleed = 'childFrontmatterMarkdownFile.childMarkdownRemark.frontmatter.fullBleed',
  childFrontmatterMarkdownFile___childMarkdownRemark___excerpt = 'childFrontmatterMarkdownFile.childMarkdownRemark.excerpt',
  childFrontmatterMarkdownFile___childMarkdownRemark___rawMarkdownBody = 'childFrontmatterMarkdownFile.childMarkdownRemark.rawMarkdownBody',
  childFrontmatterMarkdownFile___childMarkdownRemark___fileAbsolutePath = 'childFrontmatterMarkdownFile.childMarkdownRemark.fileAbsolutePath',
  childFrontmatterMarkdownFile___childMarkdownRemark___html = 'childFrontmatterMarkdownFile.childMarkdownRemark.html',
  childFrontmatterMarkdownFile___childMarkdownRemark___htmlAst = 'childFrontmatterMarkdownFile.childMarkdownRemark.htmlAst',
  childFrontmatterMarkdownFile___childMarkdownRemark___excerptAst = 'childFrontmatterMarkdownFile.childMarkdownRemark.excerptAst',
  childFrontmatterMarkdownFile___childMarkdownRemark___headings = 'childFrontmatterMarkdownFile.childMarkdownRemark.headings',
  childFrontmatterMarkdownFile___childMarkdownRemark___headings___value = 'childFrontmatterMarkdownFile.childMarkdownRemark.headings.value',
  childFrontmatterMarkdownFile___childMarkdownRemark___headings___depth = 'childFrontmatterMarkdownFile.childMarkdownRemark.headings.depth',
  childFrontmatterMarkdownFile___childMarkdownRemark___timeToRead = 'childFrontmatterMarkdownFile.childMarkdownRemark.timeToRead',
  childFrontmatterMarkdownFile___childMarkdownRemark___tableOfContents = 'childFrontmatterMarkdownFile.childMarkdownRemark.tableOfContents',
  childFrontmatterMarkdownFile___childMarkdownRemark___wordCount___paragraphs = 'childFrontmatterMarkdownFile.childMarkdownRemark.wordCount.paragraphs',
  childFrontmatterMarkdownFile___childMarkdownRemark___wordCount___sentences = 'childFrontmatterMarkdownFile.childMarkdownRemark.wordCount.sentences',
  childFrontmatterMarkdownFile___childMarkdownRemark___wordCount___words = 'childFrontmatterMarkdownFile.childMarkdownRemark.wordCount.words',
  childFrontmatterMarkdownFile___childMarkdownRemark___parent___id = 'childFrontmatterMarkdownFile.childMarkdownRemark.parent.id',
  childFrontmatterMarkdownFile___childMarkdownRemark___parent___children = 'childFrontmatterMarkdownFile.childMarkdownRemark.parent.children',
  childFrontmatterMarkdownFile___childMarkdownRemark___children = 'childFrontmatterMarkdownFile.childMarkdownRemark.children',
  childFrontmatterMarkdownFile___childMarkdownRemark___children___id = 'childFrontmatterMarkdownFile.childMarkdownRemark.children.id',
  childFrontmatterMarkdownFile___childMarkdownRemark___children___children = 'childFrontmatterMarkdownFile.childMarkdownRemark.children.children',
  childFrontmatterMarkdownFile___childMarkdownRemark___internal___content = 'childFrontmatterMarkdownFile.childMarkdownRemark.internal.content',
  childFrontmatterMarkdownFile___childMarkdownRemark___internal___contentDigest = 'childFrontmatterMarkdownFile.childMarkdownRemark.internal.contentDigest',
  childFrontmatterMarkdownFile___childMarkdownRemark___internal___description = 'childFrontmatterMarkdownFile.childMarkdownRemark.internal.description',
  childFrontmatterMarkdownFile___childMarkdownRemark___internal___fieldOwners = 'childFrontmatterMarkdownFile.childMarkdownRemark.internal.fieldOwners',
  childFrontmatterMarkdownFile___childMarkdownRemark___internal___ignoreType = 'childFrontmatterMarkdownFile.childMarkdownRemark.internal.ignoreType',
  childFrontmatterMarkdownFile___childMarkdownRemark___internal___mediaType = 'childFrontmatterMarkdownFile.childMarkdownRemark.internal.mediaType',
  childFrontmatterMarkdownFile___childMarkdownRemark___internal___owner = 'childFrontmatterMarkdownFile.childMarkdownRemark.internal.owner',
  childFrontmatterMarkdownFile___childMarkdownRemark___internal___type = 'childFrontmatterMarkdownFile.childMarkdownRemark.internal.type',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___id = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.id',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___children = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.children',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___sourceInstanceName = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.sourceInstanceName',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___absolutePath = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.absolutePath',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___extension = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.extension',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___size = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.size',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___prettySize = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.prettySize',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___modifiedTime = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.modifiedTime',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___accessTime = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.accessTime',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___changeTime = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.changeTime',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___birthTime = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.birthTime',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___root = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.root',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___dir = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.dir',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___ext = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.ext',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___name = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.name',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___relativeDirectory = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.relativeDirectory',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___dev = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.dev',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___mode = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.mode',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___nlink = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.nlink',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___uid = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.uid',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___gid = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.gid',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___rdev = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.rdev',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___blksize = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.blksize',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___ino = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.ino',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___blocks = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.blocks',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___atimeMs = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.atimeMs',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___mtimeMs = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.mtimeMs',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___ctimeMs = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.ctimeMs',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___birthtimeMs = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.birthtimeMs',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___atime = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.atime',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___mtime = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.mtime',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___ctime = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.ctime',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___birthtime = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.birthtime',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___frontmatterField = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.frontmatterField',
  childFrontmatterMarkdownFile___childMarkdownRemark___childFrontmatterMarkdownFile___frontmatterValue = 'childFrontmatterMarkdownFile.childMarkdownRemark.childFrontmatterMarkdownFile.frontmatterValue'
}

type MarkdownRemarkFieldsFilterInput = {
  readonly frontmattermd: Maybe<MarkdownRemarkFieldsFrontmattermdFilterInput>;
};

type MarkdownRemarkFieldsFrontmattermd = {
  readonly findOutMoreText: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFieldsFrontmattermdFilterInput = {
  readonly findOutMoreText: Maybe<MarkdownRemarkFilterInput>;
};

type MarkdownRemarkFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly fields: Maybe<MarkdownRemarkFieldsFilterInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly excerptAst: Maybe<JSONQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly childFrontmatterMarkdownFile: Maybe<FrontmatterMarkdownFileFilterInput>;
};

type MarkdownRemarkFrontmatter = {
  readonly title: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly showInFooter: Maybe<Scalars['Boolean']>;
  readonly headerColour: Maybe<Scalars['String']>;
  readonly template: Maybe<Scalars['String']>;
  readonly showInMenu: Maybe<Scalars['Boolean']>;
  readonly menuOrder: Maybe<Scalars['Int']>;
  readonly mainImage: Maybe<File>;
  readonly firstIntroImage: Maybe<File>;
  readonly secondIntroImage: Maybe<File>;
  readonly overlayCaption: Maybe<Scalars['String']>;
  readonly captionPosition: Maybe<Scalars['String']>;
  readonly findOutMoreText: Maybe<Scalars['String']>;
  readonly signupPlaceholder: Maybe<Scalars['String']>;
  readonly action: Maybe<Scalars['String']>;
  readonly hiddenValue: Maybe<Scalars['String']>;
  readonly layout: Maybe<Scalars['String']>;
  readonly section: Maybe<Scalars['String']>;
  readonly image: Maybe<File>;
  readonly carouselImages: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterCarouselImages>>>;
  readonly sitemap: Maybe<Scalars['Boolean']>;
  readonly image_alignment_classes: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly itunesPodcastURL: Maybe<Scalars['String']>;
  readonly podcastURL: Maybe<Scalars['String']>;
  readonly iosAppStoreLink: Maybe<Scalars['String']>;
  readonly playStoreLink: Maybe<Scalars['String']>;
  readonly mobileImage: Maybe<Scalars['String']>;
  readonly releases: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterReleases>>>;
  readonly resources: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterResources>>>;
  readonly dayOfWeek: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly time: Maybe<Scalars['String']>;
  readonly timeOfDay: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly status: Maybe<Scalars['String']>;
  readonly backgroundColour: Maybe<Scalars['String']>;
  readonly textColour: Maybe<Scalars['String']>;
  readonly eventType: Maybe<Scalars['String']>;
  readonly events: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterEvents>>>;
  readonly order: Maybe<Scalars['Int']>;
  readonly lastUpdated: Maybe<Scalars['String']>;
  readonly features: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterFeatures>>>;
  readonly tagLine: Maybe<Scalars['String']>;
  readonly eventDate: Maybe<Scalars['String']>;
  readonly price: Maybe<Scalars['String']>;
  readonly signUpEmail: Maybe<Scalars['String']>;
  readonly leader: Maybe<Scalars['String']>;
  readonly people: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterPeople>>>;
  readonly findOutMoreLink: Maybe<Scalars['String']>;
  readonly style_classes: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly imageObjectPosition: Maybe<Scalars['String']>;
  readonly fullBleed: Maybe<Scalars['Boolean']>;
};

type MarkdownRemarkFrontmatterCarouselImages = {
  readonly mainImage: Maybe<File>;
  readonly position: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterCarouselImagesFilterInput = {
  readonly mainImage: Maybe<FileFilterInput>;
  readonly position: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFrontmatterCarouselImagesFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFrontmatterCarouselImagesFilterInput>;
};

type MarkdownRemarkFrontmatterEvents = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly date: Maybe<Scalars['String']>;
  readonly time: Maybe<Scalars['String']>;
  readonly expires: Maybe<Scalars['Date']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly links: Maybe<MarkdownRemarkFrontmatterEventsLinks>;
};


type MarkdownRemarkFrontmatterEvents_expiresArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterEventsFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly date: Maybe<StringQueryOperatorInput>;
  readonly time: Maybe<StringQueryOperatorInput>;
  readonly expires: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly links: Maybe<MarkdownRemarkFrontmatterEventsLinksFilterInput>;
};

type MarkdownRemarkFrontmatterEventsFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFrontmatterEventsFilterInput>;
};

type MarkdownRemarkFrontmatterEventsLinks = {
  readonly facebook: Maybe<Scalars['String']>;
  readonly youtube: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterEventsLinksFilterInput = {
  readonly facebook: Maybe<StringQueryOperatorInput>;
  readonly youtube: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFrontmatterFeatures = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly buttonText: Maybe<Scalars['String']>;
  readonly buttonLink: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterFeaturesFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly buttonText: Maybe<StringQueryOperatorInput>;
  readonly buttonLink: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFrontmatterFeaturesFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFrontmatterFeaturesFilterInput>;
};

type MarkdownRemarkFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly showInFooter: Maybe<BooleanQueryOperatorInput>;
  readonly headerColour: Maybe<StringQueryOperatorInput>;
  readonly template: Maybe<StringQueryOperatorInput>;
  readonly showInMenu: Maybe<BooleanQueryOperatorInput>;
  readonly menuOrder: Maybe<IntQueryOperatorInput>;
  readonly mainImage: Maybe<FileFilterInput>;
  readonly firstIntroImage: Maybe<FileFilterInput>;
  readonly secondIntroImage: Maybe<FileFilterInput>;
  readonly overlayCaption: Maybe<StringQueryOperatorInput>;
  readonly captionPosition: Maybe<StringQueryOperatorInput>;
  readonly findOutMoreText: Maybe<StringQueryOperatorInput>;
  readonly signupPlaceholder: Maybe<StringQueryOperatorInput>;
  readonly action: Maybe<StringQueryOperatorInput>;
  readonly hiddenValue: Maybe<StringQueryOperatorInput>;
  readonly layout: Maybe<StringQueryOperatorInput>;
  readonly section: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<FileFilterInput>;
  readonly carouselImages: Maybe<MarkdownRemarkFrontmatterCarouselImagesFilterListInput>;
  readonly sitemap: Maybe<BooleanQueryOperatorInput>;
  readonly image_alignment_classes: Maybe<StringQueryOperatorInput>;
  readonly itunesPodcastURL: Maybe<StringQueryOperatorInput>;
  readonly podcastURL: Maybe<StringQueryOperatorInput>;
  readonly iosAppStoreLink: Maybe<StringQueryOperatorInput>;
  readonly playStoreLink: Maybe<StringQueryOperatorInput>;
  readonly mobileImage: Maybe<StringQueryOperatorInput>;
  readonly releases: Maybe<MarkdownRemarkFrontmatterReleasesFilterListInput>;
  readonly resources: Maybe<MarkdownRemarkFrontmatterResourcesFilterListInput>;
  readonly dayOfWeek: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly time: Maybe<StringQueryOperatorInput>;
  readonly timeOfDay: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly status: Maybe<StringQueryOperatorInput>;
  readonly backgroundColour: Maybe<StringQueryOperatorInput>;
  readonly textColour: Maybe<StringQueryOperatorInput>;
  readonly eventType: Maybe<StringQueryOperatorInput>;
  readonly events: Maybe<MarkdownRemarkFrontmatterEventsFilterListInput>;
  readonly order: Maybe<IntQueryOperatorInput>;
  readonly lastUpdated: Maybe<StringQueryOperatorInput>;
  readonly features: Maybe<MarkdownRemarkFrontmatterFeaturesFilterListInput>;
  readonly tagLine: Maybe<StringQueryOperatorInput>;
  readonly eventDate: Maybe<StringQueryOperatorInput>;
  readonly price: Maybe<StringQueryOperatorInput>;
  readonly signUpEmail: Maybe<StringQueryOperatorInput>;
  readonly leader: Maybe<StringQueryOperatorInput>;
  readonly people: Maybe<MarkdownRemarkFrontmatterPeopleFilterListInput>;
  readonly findOutMoreLink: Maybe<StringQueryOperatorInput>;
  readonly style_classes: Maybe<StringQueryOperatorInput>;
  readonly imageObjectPosition: Maybe<StringQueryOperatorInput>;
  readonly fullBleed: Maybe<BooleanQueryOperatorInput>;
};

type MarkdownRemarkFrontmatterPeople = {
  readonly name: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly photo: Maybe<Scalars['String']>;
  readonly headshot_position: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterPeopleFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly photo: Maybe<StringQueryOperatorInput>;
  readonly headshot_position: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFrontmatterPeopleFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFrontmatterPeopleFilterInput>;
};

type MarkdownRemarkFrontmatterReleases = {
  readonly title: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly date: Maybe<Scalars['Date']>;
  readonly coverImage: Maybe<File>;
  readonly appleMusicLink: Maybe<Scalars['String']>;
  readonly spotifyLink: Maybe<Scalars['String']>;
};


type MarkdownRemarkFrontmatterReleases_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterReleasesFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly coverImage: Maybe<FileFilterInput>;
  readonly appleMusicLink: Maybe<StringQueryOperatorInput>;
  readonly spotifyLink: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFrontmatterReleasesFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFrontmatterReleasesFilterInput>;
};

type MarkdownRemarkFrontmatterResources = {
  readonly title: Maybe<Scalars['String']>;
  readonly files: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterResourcesFiles>>>;
};

type MarkdownRemarkFrontmatterResourcesFiles = {
  readonly name: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterResourcesFilesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFrontmatterResourcesFilesFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFrontmatterResourcesFilesFilterInput>;
};

type MarkdownRemarkFrontmatterResourcesFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly files: Maybe<MarkdownRemarkFrontmatterResourcesFilesFilterListInput>;
};

type MarkdownRemarkFrontmatterResourcesFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFrontmatterResourcesFilterInput>;
};

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
};

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'black',
  TURNPOLICY_WHITE = 'white',
  TURNPOLICY_LEFT = 'left',
  TURNPOLICY_RIGHT = 'right',
  TURNPOLICY_MINORITY = 'minority',
  TURNPOLICY_MAJORITY = 'majority'
}

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly sanityBlogEntry: Maybe<SanityBlogEntry>;
  readonly allSanityBlogEntry: SanityBlogEntryConnection;
  readonly sanityEmailCustom: Maybe<SanityEmailCustom>;
  readonly allSanityEmailCustom: SanityEmailCustomConnection;
  readonly sanityPerson: Maybe<SanityPerson>;
  readonly allSanityPerson: SanityPersonConnection;
  readonly sanityRole: Maybe<SanityRole>;
  readonly allSanityRole: SanityRoleConnection;
  readonly sanityFileAsset: Maybe<SanityFileAsset>;
  readonly allSanityFileAsset: SanityFileAssetConnection;
  readonly sanityImageAsset: Maybe<SanityImageAsset>;
  readonly allSanityImageAsset: SanityImageAssetConnection;
  readonly sanitySermon: Maybe<SanitySermon>;
  readonly allSanitySermon: SanitySermonConnection;
  readonly sanitySermonEvent: Maybe<SanitySermonEvent>;
  readonly allSanitySermonEvent: SanitySermonEventConnection;
  readonly sanitySermonSeries: Maybe<SanitySermonSeries>;
  readonly allSanitySermonSeries: SanitySermonSeriesConnection;
  readonly gitBranch: Maybe<GitBranch>;
  readonly allGitBranch: GitBranchConnection;
  readonly gitAuthor: Maybe<GitAuthor>;
  readonly allGitAuthor: GitAuthorConnection;
  readonly gitCommit: Maybe<GitCommit>;
  readonly allGitCommit: GitCommitConnection;
  readonly frontmatterMarkdownFile: Maybe<FrontmatterMarkdownFile>;
  readonly allFrontmatterMarkdownFile: FrontmatterMarkdownFileConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_markdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  fields: Maybe<MarkdownRemarkFieldsFilterInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  excerptAst: Maybe<JSONQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  childFrontmatterMarkdownFile: Maybe<FrontmatterMarkdownFileFilterInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityBlogEntryArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  author: Maybe<SanityPersonFilterInput>;
  slug: Maybe<SanitySlugFilterInput>;
  text: Maybe<SanityBlockFilterListInput>;
  _rawAuthor: Maybe<JSONQueryOperatorInput>;
  _rawSlug: Maybe<JSONQueryOperatorInput>;
  _rawText: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanityBlogEntryArgs = {
  filter: Maybe<SanityBlogEntryFilterInput>;
  sort: Maybe<SanityBlogEntrySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityEmailCustomArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  sendAt: Maybe<DateQueryOperatorInput>;
  author: Maybe<SanityPersonFilterInput>;
  body: Maybe<SanityBlockFilterListInput>;
  _rawAuthor: Maybe<JSONQueryOperatorInput>;
  _rawBody: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanityEmailCustomArgs = {
  filter: Maybe<SanityEmailCustomFilterInput>;
  sort: Maybe<SanityEmailCustomSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityPersonArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  jobTitle: Maybe<StringQueryOperatorInput>;
  email: Maybe<StringQueryOperatorInput>;
  phone: Maybe<StringQueryOperatorInput>;
  roles: Maybe<SanityRoleFilterListInput>;
  headshot: Maybe<SanityImageFilterInput>;
  bio: Maybe<SanityBlockFilterListInput>;
  _rawRoles: Maybe<JSONQueryOperatorInput>;
  _rawBio: Maybe<JSONQueryOperatorInput>;
  _rawHeadshot: Maybe<JSONQueryOperatorInput>;
  bioHtml: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanityPersonArgs = {
  filter: Maybe<SanityPersonFilterInput>;
  sort: Maybe<SanityPersonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityRoleArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  slug: Maybe<SanitySlugFilterInput>;
  _rawSlug: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanityRoleArgs = {
  filter: Maybe<SanityRoleFilterInput>;
  sort: Maybe<SanityRoleSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityFileAssetArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  originalFilename: Maybe<StringQueryOperatorInput>;
  label: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  sha1hash: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  mimeType: Maybe<StringQueryOperatorInput>;
  size: Maybe<FloatQueryOperatorInput>;
  assetId: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  source: Maybe<SanityAssetSourceDataFilterInput>;
  _rawSource: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanityFileAssetArgs = {
  filter: Maybe<SanityFileAssetFilterInput>;
  sort: Maybe<SanityFileAssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityImageAssetArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  originalFilename: Maybe<StringQueryOperatorInput>;
  label: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  sha1hash: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  mimeType: Maybe<StringQueryOperatorInput>;
  size: Maybe<FloatQueryOperatorInput>;
  assetId: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  metadata: Maybe<SanityImageMetadataFilterInput>;
  source: Maybe<SanityAssetSourceDataFilterInput>;
  fixed: Maybe<SanityImageFixedFilterInput>;
  fluid: Maybe<SanityImageFluidFilterInput>;
  _rawMetadata: Maybe<JSONQueryOperatorInput>;
  _rawSource: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
};


type Query_allSanityImageAssetArgs = {
  filter: Maybe<SanityImageAssetFilterInput>;
  sort: Maybe<SanityImageAssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanitySermonArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  preachedAt: Maybe<DateQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  durationInSeconds: Maybe<FloatQueryOperatorInput>;
  passages: Maybe<StringQueryOperatorInput>;
  event: Maybe<SanitySermonEventFilterInput>;
  series: Maybe<SanitySermonSeriesFilterInput>;
  speakers: Maybe<SanityPersonFilterListInput>;
  _rawEvent: Maybe<JSONQueryOperatorInput>;
  _rawSeries: Maybe<JSONQueryOperatorInput>;
  _rawSpeakers: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanitySermonArgs = {
  filter: Maybe<SanitySermonFilterInput>;
  sort: Maybe<SanitySermonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanitySermonEventArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanitySermonEventArgs = {
  filter: Maybe<SanitySermonEventFilterInput>;
  sort: Maybe<SanitySermonEventSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanitySermonSeriesArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  subtitle: Maybe<StringQueryOperatorInput>;
  imageUrl: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanitySermonSeriesArgs = {
  filter: Maybe<SanitySermonSeriesFilterInput>;
  sort: Maybe<SanitySermonSeriesSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_gitBranchArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  commit: Maybe<StringQueryOperatorInput>;
  current: Maybe<BooleanQueryOperatorInput>;
};


type Query_allGitBranchArgs = {
  filter: Maybe<GitBranchFilterInput>;
  sort: Maybe<GitBranchSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_gitAuthorArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  email: Maybe<StringQueryOperatorInput>;
};


type Query_allGitAuthorArgs = {
  filter: Maybe<GitAuthorFilterInput>;
  sort: Maybe<GitAuthorSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_gitCommitArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  hash: Maybe<StringQueryOperatorInput>;
  message: Maybe<StringQueryOperatorInput>;
  refs: Maybe<StringQueryOperatorInput>;
  body: Maybe<StringQueryOperatorInput>;
  date: Maybe<DateQueryOperatorInput>;
  latest: Maybe<BooleanQueryOperatorInput>;
  author: Maybe<GitAuthorFilterInput>;
};


type Query_allGitCommitArgs = {
  filter: Maybe<GitCommitFilterInput>;
  sort: Maybe<GitCommitSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_frontmatterMarkdownFileArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<FileFilterInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<FileFilterInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  frontmatterField: Maybe<StringQueryOperatorInput>;
  frontmatterValue: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allFrontmatterMarkdownFileArgs = {
  filter: Maybe<FrontmatterMarkdownFileFilterInput>;
  sort: Maybe<FrontmatterMarkdownFileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type SanityAssetSourceData = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly sanityId: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type SanityAssetSourceDataFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly sanityId: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type SanityBlock = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly sanityChildren: Maybe<ReadonlyArray<Maybe<SanitySpan>>>;
  readonly style: Maybe<Scalars['String']>;
  readonly list: Maybe<Scalars['String']>;
};

type SanityBlockFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly sanityChildren: Maybe<SanitySpanFilterListInput>;
  readonly style: Maybe<StringQueryOperatorInput>;
  readonly list: Maybe<StringQueryOperatorInput>;
};

type SanityBlockFilterListInput = {
  readonly elemMatch: Maybe<SanityBlockFilterInput>;
};

type SanityBlogEntry = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly author: Maybe<SanityPerson>;
  readonly slug: Maybe<SanitySlug>;
  readonly text: Maybe<ReadonlyArray<Maybe<SanityBlock>>>;
  readonly _rawAuthor: Maybe<Scalars['JSON']>;
  readonly _rawSlug: Maybe<Scalars['JSON']>;
  readonly _rawText: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanityBlogEntry__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityBlogEntry__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityBlogEntry__rawAuthorArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityBlogEntry__rawSlugArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityBlogEntry__rawTextArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityBlogEntryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityBlogEntryEdge>;
  readonly nodes: ReadonlyArray<SanityBlogEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityBlogEntryGroupConnection>;
};


type SanityBlogEntryConnection_distinctArgs = {
  field: SanityBlogEntryFieldsEnum;
};


type SanityBlogEntryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityBlogEntryFieldsEnum;
};

type SanityBlogEntryEdge = {
  readonly next: Maybe<SanityBlogEntry>;
  readonly node: SanityBlogEntry;
  readonly previous: Maybe<SanityBlogEntry>;
};

enum SanityBlogEntryFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  title = 'title',
  author____id = 'author._id',
  author____type = 'author._type',
  author____createdAt = 'author._createdAt',
  author____updatedAt = 'author._updatedAt',
  author____rev = 'author._rev',
  author____key = 'author._key',
  author___name = 'author.name',
  author___jobTitle = 'author.jobTitle',
  author___email = 'author.email',
  author___phone = 'author.phone',
  author___roles = 'author.roles',
  author___roles____id = 'author.roles._id',
  author___roles____type = 'author.roles._type',
  author___roles____createdAt = 'author.roles._createdAt',
  author___roles____updatedAt = 'author.roles._updatedAt',
  author___roles____rev = 'author.roles._rev',
  author___roles____key = 'author.roles._key',
  author___roles___name = 'author.roles.name',
  author___roles___slug____key = 'author.roles.slug._key',
  author___roles___slug____type = 'author.roles.slug._type',
  author___roles___slug___current = 'author.roles.slug.current',
  author___roles____rawSlug = 'author.roles._rawSlug',
  author___roles___id = 'author.roles.id',
  author___roles___parent___id = 'author.roles.parent.id',
  author___roles___parent___children = 'author.roles.parent.children',
  author___roles___children = 'author.roles.children',
  author___roles___children___id = 'author.roles.children.id',
  author___roles___children___children = 'author.roles.children.children',
  author___roles___internal___content = 'author.roles.internal.content',
  author___roles___internal___contentDigest = 'author.roles.internal.contentDigest',
  author___roles___internal___description = 'author.roles.internal.description',
  author___roles___internal___fieldOwners = 'author.roles.internal.fieldOwners',
  author___roles___internal___ignoreType = 'author.roles.internal.ignoreType',
  author___roles___internal___mediaType = 'author.roles.internal.mediaType',
  author___roles___internal___owner = 'author.roles.internal.owner',
  author___roles___internal___type = 'author.roles.internal.type',
  author___headshot____key = 'author.headshot._key',
  author___headshot____type = 'author.headshot._type',
  author___headshot___asset____id = 'author.headshot.asset._id',
  author___headshot___asset____type = 'author.headshot.asset._type',
  author___headshot___asset____createdAt = 'author.headshot.asset._createdAt',
  author___headshot___asset____updatedAt = 'author.headshot.asset._updatedAt',
  author___headshot___asset____rev = 'author.headshot.asset._rev',
  author___headshot___asset____key = 'author.headshot.asset._key',
  author___headshot___asset___originalFilename = 'author.headshot.asset.originalFilename',
  author___headshot___asset___label = 'author.headshot.asset.label',
  author___headshot___asset___title = 'author.headshot.asset.title',
  author___headshot___asset___description = 'author.headshot.asset.description',
  author___headshot___asset___sha1hash = 'author.headshot.asset.sha1hash',
  author___headshot___asset___extension = 'author.headshot.asset.extension',
  author___headshot___asset___mimeType = 'author.headshot.asset.mimeType',
  author___headshot___asset___size = 'author.headshot.asset.size',
  author___headshot___asset___assetId = 'author.headshot.asset.assetId',
  author___headshot___asset___path = 'author.headshot.asset.path',
  author___headshot___asset___url = 'author.headshot.asset.url',
  author___headshot___asset____rawMetadata = 'author.headshot.asset._rawMetadata',
  author___headshot___asset____rawSource = 'author.headshot.asset._rawSource',
  author___headshot___asset___id = 'author.headshot.asset.id',
  author___headshot___asset___children = 'author.headshot.asset.children',
  author___headshot___hotspot____key = 'author.headshot.hotspot._key',
  author___headshot___hotspot____type = 'author.headshot.hotspot._type',
  author___headshot___hotspot___x = 'author.headshot.hotspot.x',
  author___headshot___hotspot___y = 'author.headshot.hotspot.y',
  author___headshot___hotspot___height = 'author.headshot.hotspot.height',
  author___headshot___hotspot___width = 'author.headshot.hotspot.width',
  author___headshot___crop____key = 'author.headshot.crop._key',
  author___headshot___crop____type = 'author.headshot.crop._type',
  author___headshot___crop___top = 'author.headshot.crop.top',
  author___headshot___crop___bottom = 'author.headshot.crop.bottom',
  author___headshot___crop___left = 'author.headshot.crop.left',
  author___headshot___crop___right = 'author.headshot.crop.right',
  author___bio = 'author.bio',
  author___bio____key = 'author.bio._key',
  author___bio____type = 'author.bio._type',
  author___bio___sanityChildren = 'author.bio.sanityChildren',
  author___bio___sanityChildren____key = 'author.bio.sanityChildren._key',
  author___bio___sanityChildren____type = 'author.bio.sanityChildren._type',
  author___bio___sanityChildren___marks = 'author.bio.sanityChildren.marks',
  author___bio___sanityChildren___text = 'author.bio.sanityChildren.text',
  author___bio___style = 'author.bio.style',
  author___bio___list = 'author.bio.list',
  author____rawRoles = 'author._rawRoles',
  author____rawBio = 'author._rawBio',
  author____rawHeadshot = 'author._rawHeadshot',
  author___bioHtml = 'author.bioHtml',
  author___id = 'author.id',
  author___parent___id = 'author.parent.id',
  author___parent___parent___id = 'author.parent.parent.id',
  author___parent___parent___children = 'author.parent.parent.children',
  author___parent___children = 'author.parent.children',
  author___parent___children___id = 'author.parent.children.id',
  author___parent___children___children = 'author.parent.children.children',
  author___parent___internal___content = 'author.parent.internal.content',
  author___parent___internal___contentDigest = 'author.parent.internal.contentDigest',
  author___parent___internal___description = 'author.parent.internal.description',
  author___parent___internal___fieldOwners = 'author.parent.internal.fieldOwners',
  author___parent___internal___ignoreType = 'author.parent.internal.ignoreType',
  author___parent___internal___mediaType = 'author.parent.internal.mediaType',
  author___parent___internal___owner = 'author.parent.internal.owner',
  author___parent___internal___type = 'author.parent.internal.type',
  author___children = 'author.children',
  author___children___id = 'author.children.id',
  author___children___parent___id = 'author.children.parent.id',
  author___children___parent___children = 'author.children.parent.children',
  author___children___children = 'author.children.children',
  author___children___children___id = 'author.children.children.id',
  author___children___children___children = 'author.children.children.children',
  author___children___internal___content = 'author.children.internal.content',
  author___children___internal___contentDigest = 'author.children.internal.contentDigest',
  author___children___internal___description = 'author.children.internal.description',
  author___children___internal___fieldOwners = 'author.children.internal.fieldOwners',
  author___children___internal___ignoreType = 'author.children.internal.ignoreType',
  author___children___internal___mediaType = 'author.children.internal.mediaType',
  author___children___internal___owner = 'author.children.internal.owner',
  author___children___internal___type = 'author.children.internal.type',
  author___internal___content = 'author.internal.content',
  author___internal___contentDigest = 'author.internal.contentDigest',
  author___internal___description = 'author.internal.description',
  author___internal___fieldOwners = 'author.internal.fieldOwners',
  author___internal___ignoreType = 'author.internal.ignoreType',
  author___internal___mediaType = 'author.internal.mediaType',
  author___internal___owner = 'author.internal.owner',
  author___internal___type = 'author.internal.type',
  slug____key = 'slug._key',
  slug____type = 'slug._type',
  slug___current = 'slug.current',
  text = 'text',
  text____key = 'text._key',
  text____type = 'text._type',
  text___sanityChildren = 'text.sanityChildren',
  text___sanityChildren____key = 'text.sanityChildren._key',
  text___sanityChildren____type = 'text.sanityChildren._type',
  text___sanityChildren___marks = 'text.sanityChildren.marks',
  text___sanityChildren___text = 'text.sanityChildren.text',
  text___style = 'text.style',
  text___list = 'text.list',
  _rawAuthor = '_rawAuthor',
  _rawSlug = '_rawSlug',
  _rawText = '_rawText',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanityBlogEntryFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<SanityPersonFilterInput>;
  readonly slug: Maybe<SanitySlugFilterInput>;
  readonly text: Maybe<SanityBlockFilterListInput>;
  readonly _rawAuthor: Maybe<JSONQueryOperatorInput>;
  readonly _rawSlug: Maybe<JSONQueryOperatorInput>;
  readonly _rawText: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanityBlogEntryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityBlogEntryEdge>;
  readonly nodes: ReadonlyArray<SanityBlogEntry>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityBlogEntrySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityBlogEntryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

/** A Sanity document */
type SanityDocument = {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
};

type SanityEmailCustom = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly sendAt: Maybe<Scalars['Date']>;
  readonly author: Maybe<SanityPerson>;
  readonly body: Maybe<ReadonlyArray<Maybe<SanityBlock>>>;
  readonly _rawAuthor: Maybe<Scalars['JSON']>;
  readonly _rawBody: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanityEmailCustom__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityEmailCustom__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityEmailCustom_sendAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityEmailCustom__rawAuthorArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityEmailCustom__rawBodyArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityEmailCustomConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityEmailCustomEdge>;
  readonly nodes: ReadonlyArray<SanityEmailCustom>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityEmailCustomGroupConnection>;
};


type SanityEmailCustomConnection_distinctArgs = {
  field: SanityEmailCustomFieldsEnum;
};


type SanityEmailCustomConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityEmailCustomFieldsEnum;
};

type SanityEmailCustomEdge = {
  readonly next: Maybe<SanityEmailCustom>;
  readonly node: SanityEmailCustom;
  readonly previous: Maybe<SanityEmailCustom>;
};

enum SanityEmailCustomFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  title = 'title',
  sendAt = 'sendAt',
  author____id = 'author._id',
  author____type = 'author._type',
  author____createdAt = 'author._createdAt',
  author____updatedAt = 'author._updatedAt',
  author____rev = 'author._rev',
  author____key = 'author._key',
  author___name = 'author.name',
  author___jobTitle = 'author.jobTitle',
  author___email = 'author.email',
  author___phone = 'author.phone',
  author___roles = 'author.roles',
  author___roles____id = 'author.roles._id',
  author___roles____type = 'author.roles._type',
  author___roles____createdAt = 'author.roles._createdAt',
  author___roles____updatedAt = 'author.roles._updatedAt',
  author___roles____rev = 'author.roles._rev',
  author___roles____key = 'author.roles._key',
  author___roles___name = 'author.roles.name',
  author___roles___slug____key = 'author.roles.slug._key',
  author___roles___slug____type = 'author.roles.slug._type',
  author___roles___slug___current = 'author.roles.slug.current',
  author___roles____rawSlug = 'author.roles._rawSlug',
  author___roles___id = 'author.roles.id',
  author___roles___parent___id = 'author.roles.parent.id',
  author___roles___parent___children = 'author.roles.parent.children',
  author___roles___children = 'author.roles.children',
  author___roles___children___id = 'author.roles.children.id',
  author___roles___children___children = 'author.roles.children.children',
  author___roles___internal___content = 'author.roles.internal.content',
  author___roles___internal___contentDigest = 'author.roles.internal.contentDigest',
  author___roles___internal___description = 'author.roles.internal.description',
  author___roles___internal___fieldOwners = 'author.roles.internal.fieldOwners',
  author___roles___internal___ignoreType = 'author.roles.internal.ignoreType',
  author___roles___internal___mediaType = 'author.roles.internal.mediaType',
  author___roles___internal___owner = 'author.roles.internal.owner',
  author___roles___internal___type = 'author.roles.internal.type',
  author___headshot____key = 'author.headshot._key',
  author___headshot____type = 'author.headshot._type',
  author___headshot___asset____id = 'author.headshot.asset._id',
  author___headshot___asset____type = 'author.headshot.asset._type',
  author___headshot___asset____createdAt = 'author.headshot.asset._createdAt',
  author___headshot___asset____updatedAt = 'author.headshot.asset._updatedAt',
  author___headshot___asset____rev = 'author.headshot.asset._rev',
  author___headshot___asset____key = 'author.headshot.asset._key',
  author___headshot___asset___originalFilename = 'author.headshot.asset.originalFilename',
  author___headshot___asset___label = 'author.headshot.asset.label',
  author___headshot___asset___title = 'author.headshot.asset.title',
  author___headshot___asset___description = 'author.headshot.asset.description',
  author___headshot___asset___sha1hash = 'author.headshot.asset.sha1hash',
  author___headshot___asset___extension = 'author.headshot.asset.extension',
  author___headshot___asset___mimeType = 'author.headshot.asset.mimeType',
  author___headshot___asset___size = 'author.headshot.asset.size',
  author___headshot___asset___assetId = 'author.headshot.asset.assetId',
  author___headshot___asset___path = 'author.headshot.asset.path',
  author___headshot___asset___url = 'author.headshot.asset.url',
  author___headshot___asset____rawMetadata = 'author.headshot.asset._rawMetadata',
  author___headshot___asset____rawSource = 'author.headshot.asset._rawSource',
  author___headshot___asset___id = 'author.headshot.asset.id',
  author___headshot___asset___children = 'author.headshot.asset.children',
  author___headshot___hotspot____key = 'author.headshot.hotspot._key',
  author___headshot___hotspot____type = 'author.headshot.hotspot._type',
  author___headshot___hotspot___x = 'author.headshot.hotspot.x',
  author___headshot___hotspot___y = 'author.headshot.hotspot.y',
  author___headshot___hotspot___height = 'author.headshot.hotspot.height',
  author___headshot___hotspot___width = 'author.headshot.hotspot.width',
  author___headshot___crop____key = 'author.headshot.crop._key',
  author___headshot___crop____type = 'author.headshot.crop._type',
  author___headshot___crop___top = 'author.headshot.crop.top',
  author___headshot___crop___bottom = 'author.headshot.crop.bottom',
  author___headshot___crop___left = 'author.headshot.crop.left',
  author___headshot___crop___right = 'author.headshot.crop.right',
  author___bio = 'author.bio',
  author___bio____key = 'author.bio._key',
  author___bio____type = 'author.bio._type',
  author___bio___sanityChildren = 'author.bio.sanityChildren',
  author___bio___sanityChildren____key = 'author.bio.sanityChildren._key',
  author___bio___sanityChildren____type = 'author.bio.sanityChildren._type',
  author___bio___sanityChildren___marks = 'author.bio.sanityChildren.marks',
  author___bio___sanityChildren___text = 'author.bio.sanityChildren.text',
  author___bio___style = 'author.bio.style',
  author___bio___list = 'author.bio.list',
  author____rawRoles = 'author._rawRoles',
  author____rawBio = 'author._rawBio',
  author____rawHeadshot = 'author._rawHeadshot',
  author___bioHtml = 'author.bioHtml',
  author___id = 'author.id',
  author___parent___id = 'author.parent.id',
  author___parent___parent___id = 'author.parent.parent.id',
  author___parent___parent___children = 'author.parent.parent.children',
  author___parent___children = 'author.parent.children',
  author___parent___children___id = 'author.parent.children.id',
  author___parent___children___children = 'author.parent.children.children',
  author___parent___internal___content = 'author.parent.internal.content',
  author___parent___internal___contentDigest = 'author.parent.internal.contentDigest',
  author___parent___internal___description = 'author.parent.internal.description',
  author___parent___internal___fieldOwners = 'author.parent.internal.fieldOwners',
  author___parent___internal___ignoreType = 'author.parent.internal.ignoreType',
  author___parent___internal___mediaType = 'author.parent.internal.mediaType',
  author___parent___internal___owner = 'author.parent.internal.owner',
  author___parent___internal___type = 'author.parent.internal.type',
  author___children = 'author.children',
  author___children___id = 'author.children.id',
  author___children___parent___id = 'author.children.parent.id',
  author___children___parent___children = 'author.children.parent.children',
  author___children___children = 'author.children.children',
  author___children___children___id = 'author.children.children.id',
  author___children___children___children = 'author.children.children.children',
  author___children___internal___content = 'author.children.internal.content',
  author___children___internal___contentDigest = 'author.children.internal.contentDigest',
  author___children___internal___description = 'author.children.internal.description',
  author___children___internal___fieldOwners = 'author.children.internal.fieldOwners',
  author___children___internal___ignoreType = 'author.children.internal.ignoreType',
  author___children___internal___mediaType = 'author.children.internal.mediaType',
  author___children___internal___owner = 'author.children.internal.owner',
  author___children___internal___type = 'author.children.internal.type',
  author___internal___content = 'author.internal.content',
  author___internal___contentDigest = 'author.internal.contentDigest',
  author___internal___description = 'author.internal.description',
  author___internal___fieldOwners = 'author.internal.fieldOwners',
  author___internal___ignoreType = 'author.internal.ignoreType',
  author___internal___mediaType = 'author.internal.mediaType',
  author___internal___owner = 'author.internal.owner',
  author___internal___type = 'author.internal.type',
  body = 'body',
  body____key = 'body._key',
  body____type = 'body._type',
  body___sanityChildren = 'body.sanityChildren',
  body___sanityChildren____key = 'body.sanityChildren._key',
  body___sanityChildren____type = 'body.sanityChildren._type',
  body___sanityChildren___marks = 'body.sanityChildren.marks',
  body___sanityChildren___text = 'body.sanityChildren.text',
  body___style = 'body.style',
  body___list = 'body.list',
  _rawAuthor = '_rawAuthor',
  _rawBody = '_rawBody',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanityEmailCustomFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly sendAt: Maybe<DateQueryOperatorInput>;
  readonly author: Maybe<SanityPersonFilterInput>;
  readonly body: Maybe<SanityBlockFilterListInput>;
  readonly _rawAuthor: Maybe<JSONQueryOperatorInput>;
  readonly _rawBody: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanityEmailCustomGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityEmailCustomEdge>;
  readonly nodes: ReadonlyArray<SanityEmailCustom>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityEmailCustomSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityEmailCustomFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanityFile = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly asset: Maybe<SanityFileAsset>;
};

type SanityFileAsset = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly originalFilename: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly sha1hash: Maybe<Scalars['String']>;
  readonly extension: Maybe<Scalars['String']>;
  readonly mimeType: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly assetId: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly source: Maybe<SanityAssetSourceData>;
  readonly _rawSource: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanityFileAsset__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityFileAsset__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityFileAsset__rawSourceArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityFileAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityFileAssetEdge>;
  readonly nodes: ReadonlyArray<SanityFileAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityFileAssetGroupConnection>;
};


type SanityFileAssetConnection_distinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


type SanityFileAssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityFileAssetFieldsEnum;
};

type SanityFileAssetEdge = {
  readonly next: Maybe<SanityFileAsset>;
  readonly node: SanityFileAsset;
  readonly previous: Maybe<SanityFileAsset>;
};

enum SanityFileAssetFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  originalFilename = 'originalFilename',
  label = 'label',
  title = 'title',
  description = 'description',
  sha1hash = 'sha1hash',
  extension = 'extension',
  mimeType = 'mimeType',
  size = 'size',
  assetId = 'assetId',
  path = 'path',
  url = 'url',
  source____key = 'source._key',
  source____type = 'source._type',
  source___name = 'source.name',
  source___sanityId = 'source.sanityId',
  source___url = 'source.url',
  _rawSource = '_rawSource',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanityFileAssetFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly originalFilename: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sha1hash: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly mimeType: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly assetId: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly source: Maybe<SanityAssetSourceDataFilterInput>;
  readonly _rawSource: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanityFileAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityFileAssetEdge>;
  readonly nodes: ReadonlyArray<SanityFileAsset>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityFileAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityFileAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanityGeopoint = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly lat: Maybe<Scalars['Float']>;
  readonly lng: Maybe<Scalars['Float']>;
  readonly alt: Maybe<Scalars['Float']>;
};

type SanityGeopointFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly lat: Maybe<FloatQueryOperatorInput>;
  readonly lng: Maybe<FloatQueryOperatorInput>;
  readonly alt: Maybe<FloatQueryOperatorInput>;
};

type SanityImage = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly asset: Maybe<SanityImageAsset>;
  readonly hotspot: Maybe<SanityImageHotspot>;
  readonly crop: Maybe<SanityImageCrop>;
};

type SanityImageAsset = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly originalFilename: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly sha1hash: Maybe<Scalars['String']>;
  readonly extension: Maybe<Scalars['String']>;
  readonly mimeType: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly assetId: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly metadata: Maybe<SanityImageMetadata>;
  readonly source: Maybe<SanityAssetSourceData>;
  readonly fixed: Maybe<SanityImageFixed>;
  readonly fluid: Maybe<SanityImageFluid>;
  readonly _rawMetadata: Maybe<Scalars['JSON']>;
  readonly _rawSource: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly childImageSharp: Maybe<ImageSharp>;
};


type SanityImageAsset__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityImageAsset__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityImageAsset_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  toFormat?: Maybe<SanityImageFormat>;
};


type SanityImageAsset_fluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  sizes: Maybe<Scalars['String']>;
  toFormat?: Maybe<SanityImageFormat>;
};


type SanityImageAsset__rawMetadataArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityImageAsset__rawSourceArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityImageAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityImageAssetEdge>;
  readonly nodes: ReadonlyArray<SanityImageAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityImageAssetGroupConnection>;
};


type SanityImageAssetConnection_distinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


type SanityImageAssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityImageAssetFieldsEnum;
};

type SanityImageAssetEdge = {
  readonly next: Maybe<SanityImageAsset>;
  readonly node: SanityImageAsset;
  readonly previous: Maybe<SanityImageAsset>;
};

enum SanityImageAssetFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  originalFilename = 'originalFilename',
  label = 'label',
  title = 'title',
  description = 'description',
  sha1hash = 'sha1hash',
  extension = 'extension',
  mimeType = 'mimeType',
  size = 'size',
  assetId = 'assetId',
  path = 'path',
  url = 'url',
  metadata____key = 'metadata._key',
  metadata____type = 'metadata._type',
  metadata___location____key = 'metadata.location._key',
  metadata___location____type = 'metadata.location._type',
  metadata___location___lat = 'metadata.location.lat',
  metadata___location___lng = 'metadata.location.lng',
  metadata___location___alt = 'metadata.location.alt',
  metadata___dimensions____key = 'metadata.dimensions._key',
  metadata___dimensions____type = 'metadata.dimensions._type',
  metadata___dimensions___height = 'metadata.dimensions.height',
  metadata___dimensions___width = 'metadata.dimensions.width',
  metadata___dimensions___aspectRatio = 'metadata.dimensions.aspectRatio',
  metadata___palette____key = 'metadata.palette._key',
  metadata___palette____type = 'metadata.palette._type',
  metadata___palette___darkMuted____key = 'metadata.palette.darkMuted._key',
  metadata___palette___darkMuted____type = 'metadata.palette.darkMuted._type',
  metadata___palette___darkMuted___background = 'metadata.palette.darkMuted.background',
  metadata___palette___darkMuted___foreground = 'metadata.palette.darkMuted.foreground',
  metadata___palette___darkMuted___population = 'metadata.palette.darkMuted.population',
  metadata___palette___darkMuted___title = 'metadata.palette.darkMuted.title',
  metadata___palette___lightVibrant____key = 'metadata.palette.lightVibrant._key',
  metadata___palette___lightVibrant____type = 'metadata.palette.lightVibrant._type',
  metadata___palette___lightVibrant___background = 'metadata.palette.lightVibrant.background',
  metadata___palette___lightVibrant___foreground = 'metadata.palette.lightVibrant.foreground',
  metadata___palette___lightVibrant___population = 'metadata.palette.lightVibrant.population',
  metadata___palette___lightVibrant___title = 'metadata.palette.lightVibrant.title',
  metadata___palette___darkVibrant____key = 'metadata.palette.darkVibrant._key',
  metadata___palette___darkVibrant____type = 'metadata.palette.darkVibrant._type',
  metadata___palette___darkVibrant___background = 'metadata.palette.darkVibrant.background',
  metadata___palette___darkVibrant___foreground = 'metadata.palette.darkVibrant.foreground',
  metadata___palette___darkVibrant___population = 'metadata.palette.darkVibrant.population',
  metadata___palette___darkVibrant___title = 'metadata.palette.darkVibrant.title',
  metadata___palette___vibrant____key = 'metadata.palette.vibrant._key',
  metadata___palette___vibrant____type = 'metadata.palette.vibrant._type',
  metadata___palette___vibrant___background = 'metadata.palette.vibrant.background',
  metadata___palette___vibrant___foreground = 'metadata.palette.vibrant.foreground',
  metadata___palette___vibrant___population = 'metadata.palette.vibrant.population',
  metadata___palette___vibrant___title = 'metadata.palette.vibrant.title',
  metadata___palette___dominant____key = 'metadata.palette.dominant._key',
  metadata___palette___dominant____type = 'metadata.palette.dominant._type',
  metadata___palette___dominant___background = 'metadata.palette.dominant.background',
  metadata___palette___dominant___foreground = 'metadata.palette.dominant.foreground',
  metadata___palette___dominant___population = 'metadata.palette.dominant.population',
  metadata___palette___dominant___title = 'metadata.palette.dominant.title',
  metadata___palette___lightMuted____key = 'metadata.palette.lightMuted._key',
  metadata___palette___lightMuted____type = 'metadata.palette.lightMuted._type',
  metadata___palette___lightMuted___background = 'metadata.palette.lightMuted.background',
  metadata___palette___lightMuted___foreground = 'metadata.palette.lightMuted.foreground',
  metadata___palette___lightMuted___population = 'metadata.palette.lightMuted.population',
  metadata___palette___lightMuted___title = 'metadata.palette.lightMuted.title',
  metadata___palette___muted____key = 'metadata.palette.muted._key',
  metadata___palette___muted____type = 'metadata.palette.muted._type',
  metadata___palette___muted___background = 'metadata.palette.muted.background',
  metadata___palette___muted___foreground = 'metadata.palette.muted.foreground',
  metadata___palette___muted___population = 'metadata.palette.muted.population',
  metadata___palette___muted___title = 'metadata.palette.muted.title',
  metadata___lqip = 'metadata.lqip',
  metadata___hasAlpha = 'metadata.hasAlpha',
  metadata___isOpaque = 'metadata.isOpaque',
  source____key = 'source._key',
  source____type = 'source._type',
  source___name = 'source.name',
  source___sanityId = 'source.sanityId',
  source___url = 'source.url',
  fixed___base64 = 'fixed.base64',
  fixed___aspectRatio = 'fixed.aspectRatio',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  fluid___base64 = 'fluid.base64',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  _rawMetadata = '_rawMetadata',
  _rawSource = '_rawSource',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  childImageSharp___fixed___base64 = 'childImageSharp.fixed.base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp.fixed.tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp.fixed.aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp.fixed.width',
  childImageSharp___fixed___height = 'childImageSharp.fixed.height',
  childImageSharp___fixed___src = 'childImageSharp.fixed.src',
  childImageSharp___fixed___srcSet = 'childImageSharp.fixed.srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp.fixed.srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp.fixed.srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp.fixed.originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp.resolutions.base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp.resolutions.tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp.resolutions.aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp.resolutions.width',
  childImageSharp___resolutions___height = 'childImageSharp.resolutions.height',
  childImageSharp___resolutions___src = 'childImageSharp.resolutions.src',
  childImageSharp___resolutions___srcSet = 'childImageSharp.resolutions.srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp.resolutions.srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp.resolutions.srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp.resolutions.originalName',
  childImageSharp___fluid___base64 = 'childImageSharp.fluid.base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp.fluid.tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp.fluid.aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp.fluid.src',
  childImageSharp___fluid___srcSet = 'childImageSharp.fluid.srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp.fluid.srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp.fluid.srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp.fluid.sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp.fluid.originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp.fluid.originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp.fluid.presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp.fluid.presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp.sizes.base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp.sizes.tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp.sizes.aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp.sizes.src',
  childImageSharp___sizes___srcSet = 'childImageSharp.sizes.srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp.sizes.srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp.sizes.srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp.sizes.sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp.sizes.originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp.sizes.originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp.sizes.presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp.sizes.presentationHeight',
  childImageSharp___original___width = 'childImageSharp.original.width',
  childImageSharp___original___height = 'childImageSharp.original.height',
  childImageSharp___original___src = 'childImageSharp.original.src',
  childImageSharp___resize___src = 'childImageSharp.resize.src',
  childImageSharp___resize___tracedSVG = 'childImageSharp.resize.tracedSVG',
  childImageSharp___resize___width = 'childImageSharp.resize.width',
  childImageSharp___resize___height = 'childImageSharp.resize.height',
  childImageSharp___resize___aspectRatio = 'childImageSharp.resize.aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp.resize.originalName',
  childImageSharp___id = 'childImageSharp.id',
  childImageSharp___parent___id = 'childImageSharp.parent.id',
  childImageSharp___parent___parent___id = 'childImageSharp.parent.parent.id',
  childImageSharp___parent___parent___children = 'childImageSharp.parent.parent.children',
  childImageSharp___parent___children = 'childImageSharp.parent.children',
  childImageSharp___parent___children___id = 'childImageSharp.parent.children.id',
  childImageSharp___parent___children___children = 'childImageSharp.parent.children.children',
  childImageSharp___parent___internal___content = 'childImageSharp.parent.internal.content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp.parent.internal.contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp.parent.internal.description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp.parent.internal.fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp.parent.internal.ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp.parent.internal.mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp.parent.internal.owner',
  childImageSharp___parent___internal___type = 'childImageSharp.parent.internal.type',
  childImageSharp___children = 'childImageSharp.children',
  childImageSharp___children___id = 'childImageSharp.children.id',
  childImageSharp___children___parent___id = 'childImageSharp.children.parent.id',
  childImageSharp___children___parent___children = 'childImageSharp.children.parent.children',
  childImageSharp___children___children = 'childImageSharp.children.children',
  childImageSharp___children___children___id = 'childImageSharp.children.children.id',
  childImageSharp___children___children___children = 'childImageSharp.children.children.children',
  childImageSharp___children___internal___content = 'childImageSharp.children.internal.content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp.children.internal.contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp.children.internal.description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp.children.internal.fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp.children.internal.ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp.children.internal.mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp.children.internal.owner',
  childImageSharp___children___internal___type = 'childImageSharp.children.internal.type',
  childImageSharp___internal___content = 'childImageSharp.internal.content',
  childImageSharp___internal___contentDigest = 'childImageSharp.internal.contentDigest',
  childImageSharp___internal___description = 'childImageSharp.internal.description',
  childImageSharp___internal___fieldOwners = 'childImageSharp.internal.fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp.internal.ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp.internal.mediaType',
  childImageSharp___internal___owner = 'childImageSharp.internal.owner',
  childImageSharp___internal___type = 'childImageSharp.internal.type'
}

type SanityImageAssetFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly originalFilename: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sha1hash: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly mimeType: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly assetId: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly metadata: Maybe<SanityImageMetadataFilterInput>;
  readonly source: Maybe<SanityAssetSourceDataFilterInput>;
  readonly fixed: Maybe<SanityImageFixedFilterInput>;
  readonly fluid: Maybe<SanityImageFluidFilterInput>;
  readonly _rawMetadata: Maybe<JSONQueryOperatorInput>;
  readonly _rawSource: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
};

type SanityImageAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityImageAssetEdge>;
  readonly nodes: ReadonlyArray<SanityImageAsset>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityImageAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityImageAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanityImageCrop = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly top: Maybe<Scalars['Float']>;
  readonly bottom: Maybe<Scalars['Float']>;
  readonly left: Maybe<Scalars['Float']>;
  readonly right: Maybe<Scalars['Float']>;
};

type SanityImageCropFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly top: Maybe<FloatQueryOperatorInput>;
  readonly bottom: Maybe<FloatQueryOperatorInput>;
  readonly left: Maybe<FloatQueryOperatorInput>;
  readonly right: Maybe<FloatQueryOperatorInput>;
};

type SanityImageDimensions = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Float']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
};

type SanityImageDimensionsFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
};

type SanityImageFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly asset: Maybe<SanityImageAssetFilterInput>;
  readonly hotspot: Maybe<SanityImageHotspotFilterInput>;
  readonly crop: Maybe<SanityImageCropFilterInput>;
};

type SanityImageFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
  readonly srcSet: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
};

type SanityImageFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
};

type SanityImageFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
  readonly srcSet: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Maybe<Scalars['String']>;
};

type SanityImageFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
};

enum SanityImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}

type SanityImageHotspot = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly x: Maybe<Scalars['Float']>;
  readonly y: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Float']>;
};

type SanityImageHotspotFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly x: Maybe<FloatQueryOperatorInput>;
  readonly y: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
};

type SanityImageMetadata = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly location: Maybe<SanityGeopoint>;
  readonly dimensions: Maybe<SanityImageDimensions>;
  readonly palette: Maybe<SanityImagePalette>;
  readonly lqip: Maybe<Scalars['String']>;
  readonly hasAlpha: Maybe<Scalars['Boolean']>;
  readonly isOpaque: Maybe<Scalars['Boolean']>;
};

type SanityImageMetadataFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly location: Maybe<SanityGeopointFilterInput>;
  readonly dimensions: Maybe<SanityImageDimensionsFilterInput>;
  readonly palette: Maybe<SanityImagePaletteFilterInput>;
  readonly lqip: Maybe<StringQueryOperatorInput>;
  readonly hasAlpha: Maybe<BooleanQueryOperatorInput>;
  readonly isOpaque: Maybe<BooleanQueryOperatorInput>;
};

type SanityImagePalette = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly darkMuted: Maybe<SanityImagePaletteSwatch>;
  readonly lightVibrant: Maybe<SanityImagePaletteSwatch>;
  readonly darkVibrant: Maybe<SanityImagePaletteSwatch>;
  readonly vibrant: Maybe<SanityImagePaletteSwatch>;
  readonly dominant: Maybe<SanityImagePaletteSwatch>;
  readonly lightMuted: Maybe<SanityImagePaletteSwatch>;
  readonly muted: Maybe<SanityImagePaletteSwatch>;
};

type SanityImagePaletteFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly darkMuted: Maybe<SanityImagePaletteSwatchFilterInput>;
  readonly lightVibrant: Maybe<SanityImagePaletteSwatchFilterInput>;
  readonly darkVibrant: Maybe<SanityImagePaletteSwatchFilterInput>;
  readonly vibrant: Maybe<SanityImagePaletteSwatchFilterInput>;
  readonly dominant: Maybe<SanityImagePaletteSwatchFilterInput>;
  readonly lightMuted: Maybe<SanityImagePaletteSwatchFilterInput>;
  readonly muted: Maybe<SanityImagePaletteSwatchFilterInput>;
};

type SanityImagePaletteSwatch = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
  readonly foreground: Maybe<Scalars['String']>;
  readonly population: Maybe<Scalars['Float']>;
  readonly title: Maybe<Scalars['String']>;
};

type SanityImagePaletteSwatchFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly background: Maybe<StringQueryOperatorInput>;
  readonly foreground: Maybe<StringQueryOperatorInput>;
  readonly population: Maybe<FloatQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
};

type SanityPerson = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly jobTitle: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly phone: Maybe<Scalars['String']>;
  readonly roles: Maybe<ReadonlyArray<Maybe<SanityRole>>>;
  readonly headshot: Maybe<SanityImage>;
  readonly bio: Maybe<ReadonlyArray<Maybe<SanityBlock>>>;
  readonly _rawRoles: Maybe<Scalars['JSON']>;
  readonly _rawBio: Maybe<Scalars['JSON']>;
  readonly _rawHeadshot: Maybe<Scalars['JSON']>;
  readonly bioHtml: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanityPerson__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityPerson__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityPerson__rawRolesArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityPerson__rawBioArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityPerson__rawHeadshotArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityPersonConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityPersonEdge>;
  readonly nodes: ReadonlyArray<SanityPerson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityPersonGroupConnection>;
};


type SanityPersonConnection_distinctArgs = {
  field: SanityPersonFieldsEnum;
};


type SanityPersonConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityPersonFieldsEnum;
};

type SanityPersonEdge = {
  readonly next: Maybe<SanityPerson>;
  readonly node: SanityPerson;
  readonly previous: Maybe<SanityPerson>;
};

enum SanityPersonFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  name = 'name',
  jobTitle = 'jobTitle',
  email = 'email',
  phone = 'phone',
  roles = 'roles',
  roles____id = 'roles._id',
  roles____type = 'roles._type',
  roles____createdAt = 'roles._createdAt',
  roles____updatedAt = 'roles._updatedAt',
  roles____rev = 'roles._rev',
  roles____key = 'roles._key',
  roles___name = 'roles.name',
  roles___slug____key = 'roles.slug._key',
  roles___slug____type = 'roles.slug._type',
  roles___slug___current = 'roles.slug.current',
  roles____rawSlug = 'roles._rawSlug',
  roles___id = 'roles.id',
  roles___parent___id = 'roles.parent.id',
  roles___parent___parent___id = 'roles.parent.parent.id',
  roles___parent___parent___children = 'roles.parent.parent.children',
  roles___parent___children = 'roles.parent.children',
  roles___parent___children___id = 'roles.parent.children.id',
  roles___parent___children___children = 'roles.parent.children.children',
  roles___parent___internal___content = 'roles.parent.internal.content',
  roles___parent___internal___contentDigest = 'roles.parent.internal.contentDigest',
  roles___parent___internal___description = 'roles.parent.internal.description',
  roles___parent___internal___fieldOwners = 'roles.parent.internal.fieldOwners',
  roles___parent___internal___ignoreType = 'roles.parent.internal.ignoreType',
  roles___parent___internal___mediaType = 'roles.parent.internal.mediaType',
  roles___parent___internal___owner = 'roles.parent.internal.owner',
  roles___parent___internal___type = 'roles.parent.internal.type',
  roles___children = 'roles.children',
  roles___children___id = 'roles.children.id',
  roles___children___parent___id = 'roles.children.parent.id',
  roles___children___parent___children = 'roles.children.parent.children',
  roles___children___children = 'roles.children.children',
  roles___children___children___id = 'roles.children.children.id',
  roles___children___children___children = 'roles.children.children.children',
  roles___children___internal___content = 'roles.children.internal.content',
  roles___children___internal___contentDigest = 'roles.children.internal.contentDigest',
  roles___children___internal___description = 'roles.children.internal.description',
  roles___children___internal___fieldOwners = 'roles.children.internal.fieldOwners',
  roles___children___internal___ignoreType = 'roles.children.internal.ignoreType',
  roles___children___internal___mediaType = 'roles.children.internal.mediaType',
  roles___children___internal___owner = 'roles.children.internal.owner',
  roles___children___internal___type = 'roles.children.internal.type',
  roles___internal___content = 'roles.internal.content',
  roles___internal___contentDigest = 'roles.internal.contentDigest',
  roles___internal___description = 'roles.internal.description',
  roles___internal___fieldOwners = 'roles.internal.fieldOwners',
  roles___internal___ignoreType = 'roles.internal.ignoreType',
  roles___internal___mediaType = 'roles.internal.mediaType',
  roles___internal___owner = 'roles.internal.owner',
  roles___internal___type = 'roles.internal.type',
  headshot____key = 'headshot._key',
  headshot____type = 'headshot._type',
  headshot___asset____id = 'headshot.asset._id',
  headshot___asset____type = 'headshot.asset._type',
  headshot___asset____createdAt = 'headshot.asset._createdAt',
  headshot___asset____updatedAt = 'headshot.asset._updatedAt',
  headshot___asset____rev = 'headshot.asset._rev',
  headshot___asset____key = 'headshot.asset._key',
  headshot___asset___originalFilename = 'headshot.asset.originalFilename',
  headshot___asset___label = 'headshot.asset.label',
  headshot___asset___title = 'headshot.asset.title',
  headshot___asset___description = 'headshot.asset.description',
  headshot___asset___sha1hash = 'headshot.asset.sha1hash',
  headshot___asset___extension = 'headshot.asset.extension',
  headshot___asset___mimeType = 'headshot.asset.mimeType',
  headshot___asset___size = 'headshot.asset.size',
  headshot___asset___assetId = 'headshot.asset.assetId',
  headshot___asset___path = 'headshot.asset.path',
  headshot___asset___url = 'headshot.asset.url',
  headshot___asset___metadata____key = 'headshot.asset.metadata._key',
  headshot___asset___metadata____type = 'headshot.asset.metadata._type',
  headshot___asset___metadata___lqip = 'headshot.asset.metadata.lqip',
  headshot___asset___metadata___hasAlpha = 'headshot.asset.metadata.hasAlpha',
  headshot___asset___metadata___isOpaque = 'headshot.asset.metadata.isOpaque',
  headshot___asset___source____key = 'headshot.asset.source._key',
  headshot___asset___source____type = 'headshot.asset.source._type',
  headshot___asset___source___name = 'headshot.asset.source.name',
  headshot___asset___source___sanityId = 'headshot.asset.source.sanityId',
  headshot___asset___source___url = 'headshot.asset.source.url',
  headshot___asset___fixed___base64 = 'headshot.asset.fixed.base64',
  headshot___asset___fixed___aspectRatio = 'headshot.asset.fixed.aspectRatio',
  headshot___asset___fixed___width = 'headshot.asset.fixed.width',
  headshot___asset___fixed___height = 'headshot.asset.fixed.height',
  headshot___asset___fixed___src = 'headshot.asset.fixed.src',
  headshot___asset___fixed___srcSet = 'headshot.asset.fixed.srcSet',
  headshot___asset___fixed___srcWebp = 'headshot.asset.fixed.srcWebp',
  headshot___asset___fixed___srcSetWebp = 'headshot.asset.fixed.srcSetWebp',
  headshot___asset___fluid___base64 = 'headshot.asset.fluid.base64',
  headshot___asset___fluid___aspectRatio = 'headshot.asset.fluid.aspectRatio',
  headshot___asset___fluid___src = 'headshot.asset.fluid.src',
  headshot___asset___fluid___srcSet = 'headshot.asset.fluid.srcSet',
  headshot___asset___fluid___srcWebp = 'headshot.asset.fluid.srcWebp',
  headshot___asset___fluid___srcSetWebp = 'headshot.asset.fluid.srcSetWebp',
  headshot___asset___fluid___sizes = 'headshot.asset.fluid.sizes',
  headshot___asset____rawMetadata = 'headshot.asset._rawMetadata',
  headshot___asset____rawSource = 'headshot.asset._rawSource',
  headshot___asset___id = 'headshot.asset.id',
  headshot___asset___parent___id = 'headshot.asset.parent.id',
  headshot___asset___parent___children = 'headshot.asset.parent.children',
  headshot___asset___children = 'headshot.asset.children',
  headshot___asset___children___id = 'headshot.asset.children.id',
  headshot___asset___children___children = 'headshot.asset.children.children',
  headshot___asset___internal___content = 'headshot.asset.internal.content',
  headshot___asset___internal___contentDigest = 'headshot.asset.internal.contentDigest',
  headshot___asset___internal___description = 'headshot.asset.internal.description',
  headshot___asset___internal___fieldOwners = 'headshot.asset.internal.fieldOwners',
  headshot___asset___internal___ignoreType = 'headshot.asset.internal.ignoreType',
  headshot___asset___internal___mediaType = 'headshot.asset.internal.mediaType',
  headshot___asset___internal___owner = 'headshot.asset.internal.owner',
  headshot___asset___internal___type = 'headshot.asset.internal.type',
  headshot___asset___childImageSharp___id = 'headshot.asset.childImageSharp.id',
  headshot___asset___childImageSharp___children = 'headshot.asset.childImageSharp.children',
  headshot___hotspot____key = 'headshot.hotspot._key',
  headshot___hotspot____type = 'headshot.hotspot._type',
  headshot___hotspot___x = 'headshot.hotspot.x',
  headshot___hotspot___y = 'headshot.hotspot.y',
  headshot___hotspot___height = 'headshot.hotspot.height',
  headshot___hotspot___width = 'headshot.hotspot.width',
  headshot___crop____key = 'headshot.crop._key',
  headshot___crop____type = 'headshot.crop._type',
  headshot___crop___top = 'headshot.crop.top',
  headshot___crop___bottom = 'headshot.crop.bottom',
  headshot___crop___left = 'headshot.crop.left',
  headshot___crop___right = 'headshot.crop.right',
  bio = 'bio',
  bio____key = 'bio._key',
  bio____type = 'bio._type',
  bio___sanityChildren = 'bio.sanityChildren',
  bio___sanityChildren____key = 'bio.sanityChildren._key',
  bio___sanityChildren____type = 'bio.sanityChildren._type',
  bio___sanityChildren___marks = 'bio.sanityChildren.marks',
  bio___sanityChildren___text = 'bio.sanityChildren.text',
  bio___style = 'bio.style',
  bio___list = 'bio.list',
  _rawRoles = '_rawRoles',
  _rawBio = '_rawBio',
  _rawHeadshot = '_rawHeadshot',
  bioHtml = 'bioHtml',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanityPersonFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly jobTitle: Maybe<StringQueryOperatorInput>;
  readonly email: Maybe<StringQueryOperatorInput>;
  readonly phone: Maybe<StringQueryOperatorInput>;
  readonly roles: Maybe<SanityRoleFilterListInput>;
  readonly headshot: Maybe<SanityImageFilterInput>;
  readonly bio: Maybe<SanityBlockFilterListInput>;
  readonly _rawRoles: Maybe<JSONQueryOperatorInput>;
  readonly _rawBio: Maybe<JSONQueryOperatorInput>;
  readonly _rawHeadshot: Maybe<JSONQueryOperatorInput>;
  readonly bioHtml: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanityPersonFilterListInput = {
  readonly elemMatch: Maybe<SanityPersonFilterInput>;
};

type SanityPersonGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityPersonEdge>;
  readonly nodes: ReadonlyArray<SanityPerson>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityPersonSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityPersonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  readonly maxDepth: Scalars['Int'];
};

type SanityRole = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly slug: Maybe<SanitySlug>;
  readonly _rawSlug: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanityRole__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityRole__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityRole__rawSlugArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityRoleConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityRoleEdge>;
  readonly nodes: ReadonlyArray<SanityRole>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityRoleGroupConnection>;
};


type SanityRoleConnection_distinctArgs = {
  field: SanityRoleFieldsEnum;
};


type SanityRoleConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityRoleFieldsEnum;
};

type SanityRoleEdge = {
  readonly next: Maybe<SanityRole>;
  readonly node: SanityRole;
  readonly previous: Maybe<SanityRole>;
};

enum SanityRoleFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  name = 'name',
  slug____key = 'slug._key',
  slug____type = 'slug._type',
  slug___current = 'slug.current',
  _rawSlug = '_rawSlug',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanityRoleFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<SanitySlugFilterInput>;
  readonly _rawSlug: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanityRoleFilterListInput = {
  readonly elemMatch: Maybe<SanityRoleFilterInput>;
};

type SanityRoleGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityRoleEdge>;
  readonly nodes: ReadonlyArray<SanityRole>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityRoleSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityRoleFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanitySermon = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly preachedAt: Maybe<Scalars['Date']>;
  readonly url: Maybe<Scalars['String']>;
  readonly durationInSeconds: Maybe<Scalars['Float']>;
  readonly passages: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly event: Maybe<SanitySermonEvent>;
  readonly series: Maybe<SanitySermonSeries>;
  readonly speakers: Maybe<ReadonlyArray<Maybe<SanityPerson>>>;
  readonly _rawEvent: Maybe<Scalars['JSON']>;
  readonly _rawSeries: Maybe<Scalars['JSON']>;
  readonly _rawSpeakers: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanitySermon__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanitySermon__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanitySermon_preachedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanitySermon__rawEventArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanitySermon__rawSeriesArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanitySermon__rawSpeakersArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanitySermonConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanitySermonEdge>;
  readonly nodes: ReadonlyArray<SanitySermon>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanitySermonGroupConnection>;
};


type SanitySermonConnection_distinctArgs = {
  field: SanitySermonFieldsEnum;
};


type SanitySermonConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanitySermonFieldsEnum;
};

type SanitySermonEdge = {
  readonly next: Maybe<SanitySermon>;
  readonly node: SanitySermon;
  readonly previous: Maybe<SanitySermon>;
};

type SanitySermonEvent = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanitySermonEvent__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanitySermonEvent__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SanitySermonEventConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanitySermonEventEdge>;
  readonly nodes: ReadonlyArray<SanitySermonEvent>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanitySermonEventGroupConnection>;
};


type SanitySermonEventConnection_distinctArgs = {
  field: SanitySermonEventFieldsEnum;
};


type SanitySermonEventConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanitySermonEventFieldsEnum;
};

type SanitySermonEventEdge = {
  readonly next: Maybe<SanitySermonEvent>;
  readonly node: SanitySermonEvent;
  readonly previous: Maybe<SanitySermonEvent>;
};

enum SanitySermonEventFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  name = 'name',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanitySermonEventFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanitySermonEventGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanitySermonEventEdge>;
  readonly nodes: ReadonlyArray<SanitySermonEvent>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanitySermonEventSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanitySermonEventFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

enum SanitySermonFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  title = 'title',
  preachedAt = 'preachedAt',
  url = 'url',
  durationInSeconds = 'durationInSeconds',
  passages = 'passages',
  event____id = 'event._id',
  event____type = 'event._type',
  event____createdAt = 'event._createdAt',
  event____updatedAt = 'event._updatedAt',
  event____rev = 'event._rev',
  event____key = 'event._key',
  event___name = 'event.name',
  event___id = 'event.id',
  event___parent___id = 'event.parent.id',
  event___parent___parent___id = 'event.parent.parent.id',
  event___parent___parent___children = 'event.parent.parent.children',
  event___parent___children = 'event.parent.children',
  event___parent___children___id = 'event.parent.children.id',
  event___parent___children___children = 'event.parent.children.children',
  event___parent___internal___content = 'event.parent.internal.content',
  event___parent___internal___contentDigest = 'event.parent.internal.contentDigest',
  event___parent___internal___description = 'event.parent.internal.description',
  event___parent___internal___fieldOwners = 'event.parent.internal.fieldOwners',
  event___parent___internal___ignoreType = 'event.parent.internal.ignoreType',
  event___parent___internal___mediaType = 'event.parent.internal.mediaType',
  event___parent___internal___owner = 'event.parent.internal.owner',
  event___parent___internal___type = 'event.parent.internal.type',
  event___children = 'event.children',
  event___children___id = 'event.children.id',
  event___children___parent___id = 'event.children.parent.id',
  event___children___parent___children = 'event.children.parent.children',
  event___children___children = 'event.children.children',
  event___children___children___id = 'event.children.children.id',
  event___children___children___children = 'event.children.children.children',
  event___children___internal___content = 'event.children.internal.content',
  event___children___internal___contentDigest = 'event.children.internal.contentDigest',
  event___children___internal___description = 'event.children.internal.description',
  event___children___internal___fieldOwners = 'event.children.internal.fieldOwners',
  event___children___internal___ignoreType = 'event.children.internal.ignoreType',
  event___children___internal___mediaType = 'event.children.internal.mediaType',
  event___children___internal___owner = 'event.children.internal.owner',
  event___children___internal___type = 'event.children.internal.type',
  event___internal___content = 'event.internal.content',
  event___internal___contentDigest = 'event.internal.contentDigest',
  event___internal___description = 'event.internal.description',
  event___internal___fieldOwners = 'event.internal.fieldOwners',
  event___internal___ignoreType = 'event.internal.ignoreType',
  event___internal___mediaType = 'event.internal.mediaType',
  event___internal___owner = 'event.internal.owner',
  event___internal___type = 'event.internal.type',
  series____id = 'series._id',
  series____type = 'series._type',
  series____createdAt = 'series._createdAt',
  series____updatedAt = 'series._updatedAt',
  series____rev = 'series._rev',
  series____key = 'series._key',
  series___name = 'series.name',
  series___subtitle = 'series.subtitle',
  series___imageUrl = 'series.imageUrl',
  series___id = 'series.id',
  series___parent___id = 'series.parent.id',
  series___parent___parent___id = 'series.parent.parent.id',
  series___parent___parent___children = 'series.parent.parent.children',
  series___parent___children = 'series.parent.children',
  series___parent___children___id = 'series.parent.children.id',
  series___parent___children___children = 'series.parent.children.children',
  series___parent___internal___content = 'series.parent.internal.content',
  series___parent___internal___contentDigest = 'series.parent.internal.contentDigest',
  series___parent___internal___description = 'series.parent.internal.description',
  series___parent___internal___fieldOwners = 'series.parent.internal.fieldOwners',
  series___parent___internal___ignoreType = 'series.parent.internal.ignoreType',
  series___parent___internal___mediaType = 'series.parent.internal.mediaType',
  series___parent___internal___owner = 'series.parent.internal.owner',
  series___parent___internal___type = 'series.parent.internal.type',
  series___children = 'series.children',
  series___children___id = 'series.children.id',
  series___children___parent___id = 'series.children.parent.id',
  series___children___parent___children = 'series.children.parent.children',
  series___children___children = 'series.children.children',
  series___children___children___id = 'series.children.children.id',
  series___children___children___children = 'series.children.children.children',
  series___children___internal___content = 'series.children.internal.content',
  series___children___internal___contentDigest = 'series.children.internal.contentDigest',
  series___children___internal___description = 'series.children.internal.description',
  series___children___internal___fieldOwners = 'series.children.internal.fieldOwners',
  series___children___internal___ignoreType = 'series.children.internal.ignoreType',
  series___children___internal___mediaType = 'series.children.internal.mediaType',
  series___children___internal___owner = 'series.children.internal.owner',
  series___children___internal___type = 'series.children.internal.type',
  series___internal___content = 'series.internal.content',
  series___internal___contentDigest = 'series.internal.contentDigest',
  series___internal___description = 'series.internal.description',
  series___internal___fieldOwners = 'series.internal.fieldOwners',
  series___internal___ignoreType = 'series.internal.ignoreType',
  series___internal___mediaType = 'series.internal.mediaType',
  series___internal___owner = 'series.internal.owner',
  series___internal___type = 'series.internal.type',
  speakers = 'speakers',
  speakers____id = 'speakers._id',
  speakers____type = 'speakers._type',
  speakers____createdAt = 'speakers._createdAt',
  speakers____updatedAt = 'speakers._updatedAt',
  speakers____rev = 'speakers._rev',
  speakers____key = 'speakers._key',
  speakers___name = 'speakers.name',
  speakers___jobTitle = 'speakers.jobTitle',
  speakers___email = 'speakers.email',
  speakers___phone = 'speakers.phone',
  speakers___roles = 'speakers.roles',
  speakers___roles____id = 'speakers.roles._id',
  speakers___roles____type = 'speakers.roles._type',
  speakers___roles____createdAt = 'speakers.roles._createdAt',
  speakers___roles____updatedAt = 'speakers.roles._updatedAt',
  speakers___roles____rev = 'speakers.roles._rev',
  speakers___roles____key = 'speakers.roles._key',
  speakers___roles___name = 'speakers.roles.name',
  speakers___roles___slug____key = 'speakers.roles.slug._key',
  speakers___roles___slug____type = 'speakers.roles.slug._type',
  speakers___roles___slug___current = 'speakers.roles.slug.current',
  speakers___roles____rawSlug = 'speakers.roles._rawSlug',
  speakers___roles___id = 'speakers.roles.id',
  speakers___roles___parent___id = 'speakers.roles.parent.id',
  speakers___roles___parent___children = 'speakers.roles.parent.children',
  speakers___roles___children = 'speakers.roles.children',
  speakers___roles___children___id = 'speakers.roles.children.id',
  speakers___roles___children___children = 'speakers.roles.children.children',
  speakers___roles___internal___content = 'speakers.roles.internal.content',
  speakers___roles___internal___contentDigest = 'speakers.roles.internal.contentDigest',
  speakers___roles___internal___description = 'speakers.roles.internal.description',
  speakers___roles___internal___fieldOwners = 'speakers.roles.internal.fieldOwners',
  speakers___roles___internal___ignoreType = 'speakers.roles.internal.ignoreType',
  speakers___roles___internal___mediaType = 'speakers.roles.internal.mediaType',
  speakers___roles___internal___owner = 'speakers.roles.internal.owner',
  speakers___roles___internal___type = 'speakers.roles.internal.type',
  speakers___headshot____key = 'speakers.headshot._key',
  speakers___headshot____type = 'speakers.headshot._type',
  speakers___headshot___asset____id = 'speakers.headshot.asset._id',
  speakers___headshot___asset____type = 'speakers.headshot.asset._type',
  speakers___headshot___asset____createdAt = 'speakers.headshot.asset._createdAt',
  speakers___headshot___asset____updatedAt = 'speakers.headshot.asset._updatedAt',
  speakers___headshot___asset____rev = 'speakers.headshot.asset._rev',
  speakers___headshot___asset____key = 'speakers.headshot.asset._key',
  speakers___headshot___asset___originalFilename = 'speakers.headshot.asset.originalFilename',
  speakers___headshot___asset___label = 'speakers.headshot.asset.label',
  speakers___headshot___asset___title = 'speakers.headshot.asset.title',
  speakers___headshot___asset___description = 'speakers.headshot.asset.description',
  speakers___headshot___asset___sha1hash = 'speakers.headshot.asset.sha1hash',
  speakers___headshot___asset___extension = 'speakers.headshot.asset.extension',
  speakers___headshot___asset___mimeType = 'speakers.headshot.asset.mimeType',
  speakers___headshot___asset___size = 'speakers.headshot.asset.size',
  speakers___headshot___asset___assetId = 'speakers.headshot.asset.assetId',
  speakers___headshot___asset___path = 'speakers.headshot.asset.path',
  speakers___headshot___asset___url = 'speakers.headshot.asset.url',
  speakers___headshot___asset____rawMetadata = 'speakers.headshot.asset._rawMetadata',
  speakers___headshot___asset____rawSource = 'speakers.headshot.asset._rawSource',
  speakers___headshot___asset___id = 'speakers.headshot.asset.id',
  speakers___headshot___asset___children = 'speakers.headshot.asset.children',
  speakers___headshot___hotspot____key = 'speakers.headshot.hotspot._key',
  speakers___headshot___hotspot____type = 'speakers.headshot.hotspot._type',
  speakers___headshot___hotspot___x = 'speakers.headshot.hotspot.x',
  speakers___headshot___hotspot___y = 'speakers.headshot.hotspot.y',
  speakers___headshot___hotspot___height = 'speakers.headshot.hotspot.height',
  speakers___headshot___hotspot___width = 'speakers.headshot.hotspot.width',
  speakers___headshot___crop____key = 'speakers.headshot.crop._key',
  speakers___headshot___crop____type = 'speakers.headshot.crop._type',
  speakers___headshot___crop___top = 'speakers.headshot.crop.top',
  speakers___headshot___crop___bottom = 'speakers.headshot.crop.bottom',
  speakers___headshot___crop___left = 'speakers.headshot.crop.left',
  speakers___headshot___crop___right = 'speakers.headshot.crop.right',
  speakers___bio = 'speakers.bio',
  speakers___bio____key = 'speakers.bio._key',
  speakers___bio____type = 'speakers.bio._type',
  speakers___bio___sanityChildren = 'speakers.bio.sanityChildren',
  speakers___bio___sanityChildren____key = 'speakers.bio.sanityChildren._key',
  speakers___bio___sanityChildren____type = 'speakers.bio.sanityChildren._type',
  speakers___bio___sanityChildren___marks = 'speakers.bio.sanityChildren.marks',
  speakers___bio___sanityChildren___text = 'speakers.bio.sanityChildren.text',
  speakers___bio___style = 'speakers.bio.style',
  speakers___bio___list = 'speakers.bio.list',
  speakers____rawRoles = 'speakers._rawRoles',
  speakers____rawBio = 'speakers._rawBio',
  speakers____rawHeadshot = 'speakers._rawHeadshot',
  speakers___bioHtml = 'speakers.bioHtml',
  speakers___id = 'speakers.id',
  speakers___parent___id = 'speakers.parent.id',
  speakers___parent___parent___id = 'speakers.parent.parent.id',
  speakers___parent___parent___children = 'speakers.parent.parent.children',
  speakers___parent___children = 'speakers.parent.children',
  speakers___parent___children___id = 'speakers.parent.children.id',
  speakers___parent___children___children = 'speakers.parent.children.children',
  speakers___parent___internal___content = 'speakers.parent.internal.content',
  speakers___parent___internal___contentDigest = 'speakers.parent.internal.contentDigest',
  speakers___parent___internal___description = 'speakers.parent.internal.description',
  speakers___parent___internal___fieldOwners = 'speakers.parent.internal.fieldOwners',
  speakers___parent___internal___ignoreType = 'speakers.parent.internal.ignoreType',
  speakers___parent___internal___mediaType = 'speakers.parent.internal.mediaType',
  speakers___parent___internal___owner = 'speakers.parent.internal.owner',
  speakers___parent___internal___type = 'speakers.parent.internal.type',
  speakers___children = 'speakers.children',
  speakers___children___id = 'speakers.children.id',
  speakers___children___parent___id = 'speakers.children.parent.id',
  speakers___children___parent___children = 'speakers.children.parent.children',
  speakers___children___children = 'speakers.children.children',
  speakers___children___children___id = 'speakers.children.children.id',
  speakers___children___children___children = 'speakers.children.children.children',
  speakers___children___internal___content = 'speakers.children.internal.content',
  speakers___children___internal___contentDigest = 'speakers.children.internal.contentDigest',
  speakers___children___internal___description = 'speakers.children.internal.description',
  speakers___children___internal___fieldOwners = 'speakers.children.internal.fieldOwners',
  speakers___children___internal___ignoreType = 'speakers.children.internal.ignoreType',
  speakers___children___internal___mediaType = 'speakers.children.internal.mediaType',
  speakers___children___internal___owner = 'speakers.children.internal.owner',
  speakers___children___internal___type = 'speakers.children.internal.type',
  speakers___internal___content = 'speakers.internal.content',
  speakers___internal___contentDigest = 'speakers.internal.contentDigest',
  speakers___internal___description = 'speakers.internal.description',
  speakers___internal___fieldOwners = 'speakers.internal.fieldOwners',
  speakers___internal___ignoreType = 'speakers.internal.ignoreType',
  speakers___internal___mediaType = 'speakers.internal.mediaType',
  speakers___internal___owner = 'speakers.internal.owner',
  speakers___internal___type = 'speakers.internal.type',
  _rawEvent = '_rawEvent',
  _rawSeries = '_rawSeries',
  _rawSpeakers = '_rawSpeakers',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanitySermonFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly preachedAt: Maybe<DateQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly durationInSeconds: Maybe<FloatQueryOperatorInput>;
  readonly passages: Maybe<StringQueryOperatorInput>;
  readonly event: Maybe<SanitySermonEventFilterInput>;
  readonly series: Maybe<SanitySermonSeriesFilterInput>;
  readonly speakers: Maybe<SanityPersonFilterListInput>;
  readonly _rawEvent: Maybe<JSONQueryOperatorInput>;
  readonly _rawSeries: Maybe<JSONQueryOperatorInput>;
  readonly _rawSpeakers: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanitySermonGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanitySermonEdge>;
  readonly nodes: ReadonlyArray<SanitySermon>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanitySermonSeries = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly imageUrl: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanitySermonSeries__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanitySermonSeries__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SanitySermonSeriesConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanitySermonSeriesEdge>;
  readonly nodes: ReadonlyArray<SanitySermonSeries>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanitySermonSeriesGroupConnection>;
};


type SanitySermonSeriesConnection_distinctArgs = {
  field: SanitySermonSeriesFieldsEnum;
};


type SanitySermonSeriesConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanitySermonSeriesFieldsEnum;
};

type SanitySermonSeriesEdge = {
  readonly next: Maybe<SanitySermonSeries>;
  readonly node: SanitySermonSeries;
  readonly previous: Maybe<SanitySermonSeries>;
};

enum SanitySermonSeriesFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  name = 'name',
  subtitle = 'subtitle',
  imageUrl = 'imageUrl',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanitySermonSeriesFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly subtitle: Maybe<StringQueryOperatorInput>;
  readonly imageUrl: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanitySermonSeriesGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanitySermonSeriesEdge>;
  readonly nodes: ReadonlyArray<SanitySermonSeries>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanitySermonSeriesSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanitySermonSeriesFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanitySermonSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanitySermonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanitySlug = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly current: Maybe<Scalars['String']>;
};

type SanitySlugFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly current: Maybe<StringQueryOperatorInput>;
};

type SanitySpan = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly marks: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly text: Maybe<Scalars['String']>;
};

type SanitySpanFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly marks: Maybe<StringQueryOperatorInput>;
  readonly text: Maybe<StringQueryOperatorInput>;
};

type SanitySpanFilterListInput = {
  readonly elemMatch: Maybe<SanitySpanFilterInput>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  buildTime = 'buildTime'
}

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata.title',
  siteMetadata___url = 'siteMetadata.url',
  siteMetadata___description = 'siteMetadata.description',
  siteMetadata___googleAnalyticsTrackingID = 'siteMetadata.googleAnalyticsTrackingID',
  siteMetadata___email = 'siteMetadata.email',
  siteMetadata___office_phone_number = 'siteMetadata.office_phone_number',
  siteMetadata___office_maps_link = 'siteMetadata.office_maps_link',
  siteMetadata___ccm_charity_number = 'siteMetadata.ccm_charity_number',
  siteMetadata___office_address = 'siteMetadata.office_address',
  siteMetadata___google_map_embedded_iframe_url = 'siteMetadata.google_map_embedded_iframe_url',
  siteMetadata___nearest_tube_stations = 'siteMetadata.nearest_tube_stations',
  siteMetadata___church_address = 'siteMetadata.church_address',
  siteMetadata___footer___extra_links = 'siteMetadata.footer.extra_links',
  siteMetadata___footer___extra_links___title = 'siteMetadata.footer.extra_links.title',
  siteMetadata___footer___extra_links___url = 'siteMetadata.footer.extra_links.url',
  siteMetadata___footer___smallprint = 'siteMetadata.footer.smallprint',
  siteMetadata___cookie_notice = 'siteMetadata.cookie_notice',
  siteMetadata___podcast___title = 'siteMetadata.podcast.title',
  siteMetadata___podcast___url = 'siteMetadata.podcast.url',
  siteMetadata___music_team_info_google_sheet___id = 'siteMetadata.music_team_info_google_sheet.id',
  siteMetadata___music_team_info_google_sheet___morning_sheet_number = 'siteMetadata.music_team_info_google_sheet.morning_sheet_number',
  siteMetadata___music_team_info_google_sheet___evening_sheet_number = 'siteMetadata.music_team_info_google_sheet.evening_sheet_number',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageContext = {
  readonly id: Maybe<Scalars['String']>;
};

type SitePageContextFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___id = 'context.id',
  pluginCreator___id = 'pluginCreator.id',
  pluginCreator___parent___id = 'pluginCreator.parent.id',
  pluginCreator___parent___parent___id = 'pluginCreator.parent.parent.id',
  pluginCreator___parent___parent___children = 'pluginCreator.parent.parent.children',
  pluginCreator___parent___children = 'pluginCreator.parent.children',
  pluginCreator___parent___children___id = 'pluginCreator.parent.children.id',
  pluginCreator___parent___children___children = 'pluginCreator.parent.children.children',
  pluginCreator___parent___internal___content = 'pluginCreator.parent.internal.content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator.parent.internal.contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator.parent.internal.description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator.parent.internal.fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator.parent.internal.ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator.parent.internal.mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator.parent.internal.owner',
  pluginCreator___parent___internal___type = 'pluginCreator.parent.internal.type',
  pluginCreator___children = 'pluginCreator.children',
  pluginCreator___children___id = 'pluginCreator.children.id',
  pluginCreator___children___parent___id = 'pluginCreator.children.parent.id',
  pluginCreator___children___parent___children = 'pluginCreator.children.parent.children',
  pluginCreator___children___children = 'pluginCreator.children.children',
  pluginCreator___children___children___id = 'pluginCreator.children.children.id',
  pluginCreator___children___children___children = 'pluginCreator.children.children.children',
  pluginCreator___children___internal___content = 'pluginCreator.children.internal.content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator.children.internal.contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator.children.internal.description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator.children.internal.fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator.children.internal.ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator.children.internal.mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator.children.internal.owner',
  pluginCreator___children___internal___type = 'pluginCreator.children.internal.type',
  pluginCreator___internal___content = 'pluginCreator.internal.content',
  pluginCreator___internal___contentDigest = 'pluginCreator.internal.contentDigest',
  pluginCreator___internal___description = 'pluginCreator.internal.description',
  pluginCreator___internal___fieldOwners = 'pluginCreator.internal.fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator.internal.ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator.internal.mediaType',
  pluginCreator___internal___owner = 'pluginCreator.internal.owner',
  pluginCreator___internal___type = 'pluginCreator.internal.type',
  pluginCreator___resolve = 'pluginCreator.resolve',
  pluginCreator___name = 'pluginCreator.name',
  pluginCreator___version = 'pluginCreator.version',
  pluginCreator___pluginOptions___emitSchema___src___generated___gatsby_introspection_json = 'pluginCreator.pluginOptions.emitSchema.src___generated___gatsby_introspection_json',
  pluginCreator___pluginOptions___emitPluginDocuments___src___generated___gatsby_plugin_documents_graphql = 'pluginCreator.pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql',
  pluginCreator___pluginOptions___useMozJpeg = 'pluginCreator.pluginOptions.useMozJpeg',
  pluginCreator___pluginOptions___name = 'pluginCreator.pluginOptions.name',
  pluginCreator___pluginOptions___path = 'pluginCreator.pluginOptions.path',
  pluginCreator___pluginOptions___projectId = 'pluginCreator.pluginOptions.projectId',
  pluginCreator___pluginOptions___dataset = 'pluginCreator.pluginOptions.dataset',
  pluginCreator___pluginOptions___whitelist = 'pluginCreator.pluginOptions.whitelist',
  pluginCreator___pluginOptions___short_name = 'pluginCreator.pluginOptions.short_name',
  pluginCreator___pluginOptions___start_url = 'pluginCreator.pluginOptions.start_url',
  pluginCreator___pluginOptions___display = 'pluginCreator.pluginOptions.display',
  pluginCreator___pluginOptions___icon = 'pluginCreator.pluginOptions.icon',
  pluginCreator___pluginOptions___headers____page_data__ = 'pluginCreator.pluginOptions.headers._page_data__',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator.pluginOptions.pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator.nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator.browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator.ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator.pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator.packageJson.name',
  pluginCreator___packageJson___description = 'pluginCreator.packageJson.description',
  pluginCreator___packageJson___version = 'pluginCreator.packageJson.version',
  pluginCreator___packageJson___main = 'pluginCreator.packageJson.main',
  pluginCreator___packageJson___license = 'pluginCreator.packageJson.license',
  pluginCreator___packageJson___dependencies = 'pluginCreator.packageJson.dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator.packageJson.dependencies.name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator.packageJson.dependencies.version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator.packageJson.devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator.packageJson.devDependencies.name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator.packageJson.devDependencies.version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator.packageJson.peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator.packageJson.peerDependencies.name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator.packageJson.peerDependencies.version',
  pluginCreator___packageJson___keywords = 'pluginCreator.packageJson.keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath'
}

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
};

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___emitSchema___src___generated___gatsby_introspection_json = 'pluginOptions.emitSchema.src___generated___gatsby_introspection_json',
  pluginOptions___emitPluginDocuments___src___generated___gatsby_plugin_documents_graphql = 'pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql',
  pluginOptions___useMozJpeg = 'pluginOptions.useMozJpeg',
  pluginOptions___name = 'pluginOptions.name',
  pluginOptions___path = 'pluginOptions.path',
  pluginOptions___projectId = 'pluginOptions.projectId',
  pluginOptions___dataset = 'pluginOptions.dataset',
  pluginOptions___whitelist = 'pluginOptions.whitelist',
  pluginOptions___short_name = 'pluginOptions.short_name',
  pluginOptions___start_url = 'pluginOptions.start_url',
  pluginOptions___display = 'pluginOptions.display',
  pluginOptions___icon = 'pluginOptions.icon',
  pluginOptions___headers____page_data__ = 'pluginOptions.headers._page_data__',
  pluginOptions___pathCheck = 'pluginOptions.pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson.name',
  packageJson___description = 'packageJson.description',
  packageJson___version = 'packageJson.version',
  packageJson___main = 'packageJson.main',
  packageJson___license = 'packageJson.license',
  packageJson___dependencies = 'packageJson.dependencies',
  packageJson___dependencies___name = 'packageJson.dependencies.name',
  packageJson___dependencies___version = 'packageJson.dependencies.version',
  packageJson___devDependencies = 'packageJson.devDependencies',
  packageJson___devDependencies___name = 'packageJson.devDependencies.name',
  packageJson___devDependencies___version = 'packageJson.devDependencies.version',
  packageJson___peerDependencies = 'packageJson.peerDependencies',
  packageJson___peerDependencies___name = 'packageJson.peerDependencies.name',
  packageJson___peerDependencies___version = 'packageJson.peerDependencies.version',
  packageJson___keywords = 'packageJson.keywords'
}

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPluginOptions = {
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchema>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocuments>;
  readonly useMozJpeg: Maybe<Scalars['Boolean']>;
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly projectId: Maybe<Scalars['String']>;
  readonly dataset: Maybe<Scalars['String']>;
  readonly whitelist: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly short_name: Maybe<Scalars['String']>;
  readonly start_url: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly headers: Maybe<SitePluginPluginOptionsHeaders>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitPluginDocuments = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitPluginDocumentsFilterInput = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitSchema = {
  readonly src___generated___gatsby_introspection_json: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitSchemaFilterInput = {
  readonly src___generated___gatsby_introspection_json: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchemaFilterInput>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocumentsFilterInput>;
  readonly useMozJpeg: Maybe<BooleanQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly projectId: Maybe<StringQueryOperatorInput>;
  readonly dataset: Maybe<StringQueryOperatorInput>;
  readonly whitelist: Maybe<StringQueryOperatorInput>;
  readonly short_name: Maybe<StringQueryOperatorInput>;
  readonly start_url: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly headers: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsHeaders = {
  readonly _page_data__: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPluginOptionsHeadersFilterInput = {
  readonly _page_data__: Maybe<StringQueryOperatorInput>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly googleAnalyticsTrackingID: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly office_phone_number: Maybe<Scalars['String']>;
  readonly office_maps_link: Maybe<Scalars['String']>;
  readonly ccm_charity_number: Maybe<Scalars['Date']>;
  readonly office_address: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly google_map_embedded_iframe_url: Maybe<Scalars['String']>;
  readonly nearest_tube_stations: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly church_address: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly footer: Maybe<SiteSiteMetadataFooter>;
  readonly cookie_notice: Maybe<Scalars['String']>;
  readonly podcast: Maybe<SiteSiteMetadataPodcast>;
  readonly music_team_info_google_sheet: Maybe<SiteSiteMetadataMusic_team_info_google_sheet>;
};


type SiteSiteMetadata_ccm_charity_numberArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly googleAnalyticsTrackingID: Maybe<StringQueryOperatorInput>;
  readonly email: Maybe<StringQueryOperatorInput>;
  readonly office_phone_number: Maybe<StringQueryOperatorInput>;
  readonly office_maps_link: Maybe<StringQueryOperatorInput>;
  readonly ccm_charity_number: Maybe<DateQueryOperatorInput>;
  readonly office_address: Maybe<StringQueryOperatorInput>;
  readonly google_map_embedded_iframe_url: Maybe<StringQueryOperatorInput>;
  readonly nearest_tube_stations: Maybe<StringQueryOperatorInput>;
  readonly church_address: Maybe<StringQueryOperatorInput>;
  readonly footer: Maybe<SiteSiteMetadataFooterFilterInput>;
  readonly cookie_notice: Maybe<StringQueryOperatorInput>;
  readonly podcast: Maybe<SiteSiteMetadataPodcastFilterInput>;
  readonly music_team_info_google_sheet: Maybe<SiteSiteMetadataMusic_team_info_google_sheetFilterInput>;
};

type SiteSiteMetadataFooter = {
  readonly extra_links: Maybe<ReadonlyArray<Maybe<SiteSiteMetadataFooterExtra_links>>>;
  readonly smallprint: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SiteSiteMetadataFooterExtra_links = {
  readonly title: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFooterExtra_linksFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataFooterExtra_linksFilterListInput = {
  readonly elemMatch: Maybe<SiteSiteMetadataFooterExtra_linksFilterInput>;
};

type SiteSiteMetadataFooterFilterInput = {
  readonly extra_links: Maybe<SiteSiteMetadataFooterExtra_linksFilterListInput>;
  readonly smallprint: Maybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataMusic_team_info_google_sheet = {
  readonly id: Maybe<Scalars['String']>;
  readonly morning_sheet_number: Maybe<Scalars['Int']>;
  readonly evening_sheet_number: Maybe<Scalars['Int']>;
};

type SiteSiteMetadataMusic_team_info_google_sheetFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly morning_sheet_number: Maybe<IntQueryOperatorInput>;
  readonly evening_sheet_number: Maybe<IntQueryOperatorInput>;
};

type SiteSiteMetadataPodcast = {
  readonly title: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type SiteSiteMetadataPodcastFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type StaffProfileFragment = (
  Pick<SanityPerson, 'name' | 'email' | 'jobTitle' | 'phone'>
  & { readonly headshot: Maybe<{ readonly asset: Maybe<{ readonly fluid: Maybe<GatsbySanityImageFluidFragment> }> }> }
);

type CovidNoticeQueryVariables = {};


type CovidNoticeQuery = { readonly covid: Maybe<(
    Pick<MarkdownRemark, 'html'>
    & { readonly frontmatter: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'name' | 'lastUpdated'>
      & { readonly features: Maybe<ReadonlyArray<Maybe<Pick<MarkdownRemarkFrontmatterFeatures, 'title' | 'description' | 'buttonText' | 'buttonLink'>>>> }
    )> }
  )> };

type FooterQueryVariables = {};


type FooterQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<(
      Pick<SiteSiteMetadata, 'church_address' | 'office_maps_link' | 'office_phone_number' | 'email'>
      & { readonly footer: Maybe<(
        Pick<SiteSiteMetadataFooter, 'smallprint'>
        & { readonly extra_links: Maybe<ReadonlyArray<Maybe<Pick<SiteSiteMetadataFooterExtra_links, 'title' | 'url'>>>> }
      )> }
    )> }> };

type HeadQueryVariables = {};


type HeadQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<(
      Pick<SiteSiteMetadata, 'title' | 'description'>
      & { readonly podcast: Maybe<Pick<SiteSiteMetadataPodcast, 'title' | 'url'>> }
    )> }> };

type FindUsQueryVariables = {};


type FindUsQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'church_address' | 'nearest_tube_stations' | 'google_map_embedded_iframe_url'>> }> };

type CookieNoticeQueryVariables = {};


type CookieNoticeQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'cookie_notice'>> }> };

type ServiceFragment = (
  Pick<MarkdownRemark, 'id' | 'html'>
  & { readonly frontmatter: Maybe<(
    Pick<MarkdownRemarkFrontmatter, 'title' | 'time'>
    & { readonly mainImage: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> }
  )> }
);

type ServicesQueryVariables = {};


type ServicesQuery = { readonly am: Maybe<ServiceFragment>, readonly pm: Maybe<ServiceFragment> };

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type SanityHeadshotFragment = { readonly asset: Maybe<{ readonly fluid: Maybe<GatsbySanityImageFluidFragment> }> };

type GatsbySanityImageFluidFragment = Pick<SanityImageFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type FamiliesPageQueryVariables = {};


type FamiliesPageQuery = { readonly mainContent: Maybe<(
    Pick<MarkdownRemark, 'html'>
    & { readonly fields: Maybe<{ readonly frontmattermd: Maybe<{ readonly findOutMoreText: Maybe<Pick<MarkdownRemark, 'html'>> }> }>, readonly frontmatter: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'title' | 'overlayCaption' | 'headerColour'>
      & { readonly mainImage: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_noBase64Fragment> }> }>, readonly firstIntroImage: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_noBase64Fragment> }> }>, readonly secondIntroImage: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_noBase64Fragment> }> }> }
    )> }
  )>, readonly youthContent: Maybe<(
    Pick<MarkdownRemark, 'html'>
    & { readonly frontmatter: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'title'>
      & { readonly mainImage: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> }
    )> }
  )>, readonly littleLambs: Maybe<(
    Pick<MarkdownRemark, 'html'>
    & { readonly fields: Maybe<{ readonly frontmattermd: Maybe<{ readonly findOutMoreText: Maybe<Pick<MarkdownRemark, 'html'>> }> }>, readonly frontmatter: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'title'>
      & { readonly mainImage: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> }
    )> }
  )>, readonly childrensWorkers: { readonly nodes: ReadonlyArray<(
      Pick<SanityPerson, 'name' | 'jobTitle' | 'email' | 'phone'>
      & { readonly headshot: Maybe<SanityHeadshotFragment> }
    )> }, readonly littleLambsWorker: { readonly nodes: ReadonlyArray<(
      Pick<SanityPerson, 'name' | 'jobTitle' | 'email' | 'phone'>
      & { readonly headshot: Maybe<SanityHeadshotFragment> }
    )> } };

type AboutUsPageQueryVariables = {};


type AboutUsPageQuery = { readonly page: Maybe<{ readonly fields: Maybe<{ readonly frontmattermd: Maybe<{ readonly findOutMoreText: Maybe<Pick<MarkdownRemark, 'html'>> }> }> }>, readonly aboutUsSections: { readonly nodes: ReadonlyArray<(
      Pick<MarkdownRemark, 'id' | 'html'>
      & { readonly frontmatter: Maybe<(
        Pick<MarkdownRemarkFrontmatter, 'title' | 'style_classes' | 'fullBleed' | 'imageObjectPosition'>
        & { readonly mainImage: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> }
      )> }
    )> } };

type HomepageQueryVariables = {};


type HomepageQuery = { readonly mainInfo: Maybe<(
    Pick<MarkdownRemark, 'html'>
    & { readonly frontmatter: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'title' | 'overlayCaption' | 'headerColour'>
      & { readonly carouselImages: Maybe<ReadonlyArray<Maybe<(
        Pick<MarkdownRemarkFrontmatterCarouselImages, 'position'>
        & { readonly mainImage: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_noBase64Fragment> }> }> }
      )>>> }
    )>, readonly fields: Maybe<{ readonly frontmattermd: Maybe<{ readonly findOutMoreText: Maybe<Pick<MarkdownRemark, 'html'>> }> }> }
  )>, readonly administrators: { readonly nodes: ReadonlyArray<(
      Pick<SanityPerson, 'name' | 'jobTitle' | 'email' | 'phone'>
      & { readonly headshot: Maybe<{ readonly asset: Maybe<{ readonly fluid: Maybe<GatsbySanityImageFluidFragment> }> }> }
    )> }, readonly midweek: Maybe<(
    Pick<MarkdownRemark, 'html'>
    & { readonly frontmatter: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'title'>
      & { readonly image: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> }
    )> }
  )> };

type StaffPageQueryVariables = {};


type StaffPageQuery = { readonly mainInfo: Maybe<(
    Pick<MarkdownRemark, 'html'>
    & { readonly frontmatter: Maybe<Pick<MarkdownRemarkFrontmatter, 'title' | 'headerColour'>> }
  )>, readonly staff: { readonly nodes: ReadonlyArray<(
      Pick<SanityPerson, 'id' | 'name' | 'jobTitle' | 'email' | 'bioHtml'>
      & { readonly headshot: Maybe<{ readonly asset: Maybe<{ readonly fluid: Maybe<GatsbySanityImageFluidFragment> }> }> }
    )> } };

type TalksPageQueryVariables = {};


type TalksPageQuery = { readonly markdownRemark: Maybe<(
    Pick<MarkdownRemark, 'html'>
    & { readonly frontmatter: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'title' | 'overlayCaption' | 'itunesPodcastURL' | 'podcastURL' | 'iosAppStoreLink' | 'playStoreLink' | 'headerColour'>
      & { readonly mainImage: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> }
    )> }
  )> };

type MusicQueryVariables = {};


type MusicQuery = { readonly musicians: { readonly nodes: ReadonlyArray<StaffProfileFragment> }, readonly mainContent: Maybe<(
    Pick<MarkdownRemark, 'html'>
    & { readonly fields: Maybe<{ readonly frontmattermd: Maybe<{ readonly findOutMoreText: Maybe<Pick<MarkdownRemark, 'html'>> }> }>, readonly frontmatter: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'title' | 'overlayCaption'>
      & { readonly mainImage: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_noBase64Fragment> }> }> }
    )> }
  )>, readonly extraContent: Maybe<(
    Pick<MarkdownRemark, 'html'>
    & { readonly frontmatter: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'title'>
      & { readonly mainImage: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> }
    )> }
  )>, readonly releases: Maybe<{ readonly frontmatter: Maybe<{ readonly releases: Maybe<ReadonlyArray<Maybe<(
        Pick<MarkdownRemarkFrontmatterReleases, 'type' | 'title' | 'appleMusicLink' | 'spotifyLink'>
        & { readonly coverImage: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> }
      )>>> }> }>, readonly resources: Maybe<(
    Pick<MarkdownRemark, 'html'>
    & { readonly frontmatter: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'title'>
      & { readonly resources: Maybe<ReadonlyArray<Maybe<(
        Pick<MarkdownRemarkFrontmatterResources, 'title'>
        & { readonly files: Maybe<ReadonlyArray<Maybe<Pick<MarkdownRemarkFrontmatterResourcesFiles, 'name' | 'url'>>>> }
      )>>> }
    )> }
  )> };

type StudentsPageQueryVariables = {};


type StudentsPageQuery = { readonly studentWorkers: { readonly nodes: ReadonlyArray<StaffProfileFragment> }, readonly mainContent: Maybe<(
    Pick<MarkdownRemark, 'html'>
    & { readonly fields: Maybe<{ readonly frontmattermd: Maybe<{ readonly findOutMoreText: Maybe<Pick<MarkdownRemark, 'html'>> }> }>, readonly frontmatter: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'title' | 'overlayCaption'>
      & { readonly mainImage: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_noBase64Fragment> }> }> }
    )> }
  )>, readonly extraContent: Maybe<(
    Pick<MarkdownRemark, 'html'>
    & { readonly frontmatter: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'title'>
      & { readonly mainImage: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> }
    )> }
  )> };

type BasicPageQueryVariables = {
  id: Scalars['String'];
};


type BasicPageQuery = { readonly mainInfo: Maybe<(
    Pick<MarkdownRemark, 'html'>
    & { readonly frontmatter: Maybe<Pick<MarkdownRemarkFrontmatter, 'title'>> }
  )> };

type GatsbySanityImageFixedFragment = Pick<SanityImageFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbySanityImageFixed_noBase64Fragment = Pick<SanityImageFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbySanityImageFixed_withWebpFragment = Pick<SanityImageFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbySanityImageFixed_withWebp_noBase64Fragment = Pick<SanityImageFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbySanityImageFluid_noBase64Fragment = Pick<SanityImageFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbySanityImageFluid_withWebpFragment = Pick<SanityImageFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbySanityImageFluid_withWebp_noBase64Fragment = Pick<SanityImageFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type MailchimpSignUpPageQueryVariables = {
  id: Scalars['String'];
};


type MailchimpSignUpPageQuery = { readonly mainInfo: Maybe<(
    Pick<MarkdownRemark, 'html'>
    & { readonly frontmatter: Maybe<Pick<MarkdownRemarkFrontmatter, 'title' | 'hiddenValue' | 'action' | 'signupPlaceholder'>> }
  )> };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_withWebp_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebp_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type PagesQueryQueryVariables = {};


type PagesQueryQuery = { readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

}