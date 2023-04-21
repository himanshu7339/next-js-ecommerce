import "../styles/Global.scss"
export const metadata = {
  title: 'Next js Ecommerce',
  description: 'Ready Ecommerce with Next js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
