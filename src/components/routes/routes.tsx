import { EmptyState } from "../EmptyState";
import { ColumnLayout } from "../../layouts/ColumnLayout";

export const routes = [
  { path: "/", element: <ColumnLayout /> },
  { path: "/marketing-plan", element: <EmptyState /> },
  { path: "/roadmap", element: <EmptyState /> },
];
