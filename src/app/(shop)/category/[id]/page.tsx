import { notFound } from 'next/navigation'

interface CategoryPage {
  params: {
    id: string
  }
}

const CATEGORIES = ['men', 'women', 'kids']

export default function CategoryPage({ params }: CategoryPage) {
  const { id } = params

  if (!CATEGORIES.includes(id)) {
    notFound()
  }

  return (
    <div>
      <h1>Category Page {id}</h1>
    </div>
  )
}
