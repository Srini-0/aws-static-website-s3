document.getElementById('helloBtn')?.addEventListener('click', () => {
  const out = document.getElementById('helloOut');
  if (out) out.textContent = 'Hello from a static site hosted on S3!';
});
