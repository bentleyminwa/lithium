const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 py-5 text-sm">
      <p className="w-full text-center">
        © {year} <span className="text-primary font-bold">Lithium</span>. All
        rights reserved.
      </p>
    </footer>
  );
}
