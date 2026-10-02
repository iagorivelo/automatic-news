export type Category = {
  slug: string;
  label: string;
};

export const CATEGORIES: Category[] = [
  { slug: "tecnologia", label: "Tecnologia" },
  { slug: "economia", label: "Economia" },
  { slug: "ciencia-e-saude", label: "Ciência e Saúde" },
  { slug: "entretenimento", label: "Entretenimento" },
  { slug: "mundo", label: "Mundo" },
  { slug: "politica", label: "Política" },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
