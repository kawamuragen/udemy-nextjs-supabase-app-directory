export default function SecondLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <p>Layout 2</p>
      {children}
    </div>
  )
}
