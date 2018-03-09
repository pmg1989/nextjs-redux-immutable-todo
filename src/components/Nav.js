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
        <Link activeClassName='active' href='/list'>
          <a className='nav-link'>list</a>
        </Link>
      </li>
      <li>
        <Link route='list-detail' params={{ id: 1 }} activeClassName='active'>
          <a className='nav-link'>list-detail</a>
        </Link>
      </li>
    </ul>
  </nav>
)
