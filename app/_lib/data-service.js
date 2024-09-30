import { notFound } from "next/navigation";
import supabase from "./supabase";

export async function getWorkExperience() {
  const { data, error } = await supabase
    .from("work_experience")
    .select("*")
    .order("id", { ascending: false });

  if (error) notFound();

  return data;
}

export async function getResume() {
  const { data, error } = await supabase.storage
    .from("resume")
    .download("nicholas ong.pdf");

  if (error) notFound();

  return data;
}

export async function getArticles() {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("id", { ascending: false });

  if (error) notFound();

  return data;
}
