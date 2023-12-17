"use client";
import { useParams } from "next/navigation";

export default function EditSquadPage() {
  const params = useParams();
  const { squadID } = params;
  console.log(squadID);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      You are editing: {squadID}
    </main>
  );
}
