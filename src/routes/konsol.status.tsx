import { createFileRoute } from "@tanstack/react-router";
import { PageHead, Panel, Stat, Table, Tag, Bar } from "@/components/console-ui";

export const Route = createFileRoute("/konsol/status")({
  component: Status;
});

function Status() {
  return null;
}
