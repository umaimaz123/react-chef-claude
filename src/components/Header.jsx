import chefImage from '/src/assets/chef-claude-icon.png';

export default function Header() {
  return (
      <header>
        <img src={chefImage} alt="chef image" />
        <h1 >Chef Claude</h1>
      </header>
  )
}
