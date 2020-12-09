import styled from 'styled-components'
import Link from 'next/link'

function Headers() {

  const Header = styled.div`
    background-color: yellow;
    height: 4px;
  `;
  return (
    <Header>
      <ul>
        <li>
          홈1
        </li>
        <li>
          <Link href="int">
            <a>
              소개
            </a>
          </Link>
        </li>
      </ul>
    </Header>
  )
}

export default Headers;