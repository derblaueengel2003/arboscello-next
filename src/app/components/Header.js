export default function Header() {
  return (
    <header className='home-header'>
      <div className='home-identity'>
        <img
          className='home-avatar'
          src='/me.jpg'
          alt='Angelo Arboscello'
          loading='lazy'
        />
        <div>
          <h1 className='home-title'>Angelo Arboscello</h1>
          <p className='home-subtitle'>
            Administrative assistant · Aspiring developer · SaaS & tooling
            enthusiast
          </p>
        </div>
      </div>
    </header>
  );
}
