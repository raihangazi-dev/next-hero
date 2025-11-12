'use client';

import { useParams } from 'next/navigation';

export default function ServicesPageDetails() {
const { id } = useParams();
  return (
    <div>
        <p>ServicesPageDetails</p>
        <p>ID: {id}</p>
    </div>
  )
}
