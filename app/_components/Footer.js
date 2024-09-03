export default function Footer() {
  const currentYear = new Date().getFullYear();

  // return (
  //   <footer className="border-t-[1px] border-border py-8 text-center text-sm text-muted-foreground">
  //     &copy; {currentYear} Nicholas Ong. All rights reserved.
  //   </footer>
  // );

  return (
    <footer className="border-t-[1px] border-border py-8 text-center text-sm text-muted-foreground md:text-right">
      &copy; {currentYear} Nicholas Ong. All rights reserved.
    </footer>
  );
}
