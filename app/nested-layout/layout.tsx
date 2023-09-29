export default function FirstLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mt-6 text-center">
      <p>Layout 1</p>
      {children}
    </div>
  )
}
