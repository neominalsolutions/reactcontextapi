import React from 'react'

function FakeLogin() {

    const login = () => {
        // apidan login olduktan sonra dönen token değeri
        const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFsaSBUYW4iLCJpYXQiOjE1MTYyMzkwMjJ9.8Z2hKbu71Yp7iSlqLWJlY1MSKWP-P8xKalPJ8CnKV_o';

        localStorage.setItem('accessToken', accessToken);
    }

  return (
    <div>
        <button onClick={login}>Fake Login</button>
    </div>
  )
}

export default FakeLogin