import Link from './Link'

export default () => (
  <nav>
    <style jsx>{`
      .nav-box {
        display: flex;
        margin-bottom: 30px;
      }
      .active {
        color: red;
        border: 1px solid red;
      }

      .nav-link {
        text-decoration: none;
        padding: 10px 20px;
        display: block;
      }
    `}</style>

    <ul className="nav-box">
      <li>
        <Link activeClassName='active' href='/'>
          <a className='nav-link home-link'>Home</a>
        </Link>
      </li>
      <li>
        <Link activeClassName='active' href='/about'>
          <a className='nav-link'>About</a>
        </Link>
      </li>
    </ul>
  </nav>
)
