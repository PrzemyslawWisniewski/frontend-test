export interface ItemMapped {
  id: number;
  title: string;
  parent_id: number | null;
  children: [ItemMapped];
  depth: number;
}
