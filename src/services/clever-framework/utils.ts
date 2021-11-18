import type { DataNode } from 'antd/lib/tree';
import type { CleverFramework } from '@/services/clever-framework/typings';

export const menuTreeData2DataNode = (treeData: CleverFramework.MenuListItem[]): DataNode[] => {
  const dataNodes: DataNode[] = [];
  for (let i = 0; i < treeData.length; i++) {
    const treeDataItem = treeData[i];
    dataNodes.push({
      key: treeDataItem.id,
      title: treeDataItem.menuName,
      children:
        treeDataItem.children && treeDataItem.children.length > 0
          ? menuTreeData2DataNode(treeDataItem.children)
          : [],
    } as DataNode);
  }
  return dataNodes;
};
