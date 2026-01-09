import Container from "../common/Container"
import Logo from "../common/Logo"
import NavBar from "./navigation/NavBar"
import NavInteractive from "./navigation/NavInteractive"

export default function Header() {
  return (
    <>
      <header className="fixed w-full top-0 left-0 z-50 py-4">
        <Container>
          <nav className="flex justify-between items-center">
            <Logo />
            <NavBar />
            <NavInteractive />
          </nav>
        </Container>
      </header>
    </>
  )
}
