export default function ThirdLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <p>Layout 3</p>
      {children}
    </div>
  )
}
