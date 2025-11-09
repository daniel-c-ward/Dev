export function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="text-center py-4">
      <p>© {year} Daniel Ward</p>
    </div>
  );
}