export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-[1px] border-border py-8 text-center text-sm text-muted-foreground sm:text-right">
      &copy; {currentYear} Nicholas Ong. All rights reserved.
    </footer>
  );
}
