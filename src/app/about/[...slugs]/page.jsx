import React from "react";

export default async function boutSlugPages({ params }) {
const p = await params;
  console.log(p);

  return <div>bout Slug Pages</div>;
}
