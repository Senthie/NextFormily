import React, { useEffect, useState } from 'react'
import './Contributors.less'

export const Contributors: React.FC = () => {
  const [contributors, setContributors] = useState([])
  useEffect(() => {
    // 改用 GitHub API（返回 Access-Control-Allow-Origin: *，支持跨域），
    // 避免依赖 formilyjs.org 的 netlify function 导致 CORS 拦截
    fetch('https://api.github.com/repos/Senthie/NextFormily/contributors')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setContributors(data)
        }
      })
      .catch(() => {})
  }, [])
  return (
    <div className="contri-list">
      {contributors.map((user, key) => (
        <div className="contri-user" key={key}>
          <a
            className="contri-user-avatar"
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <img src={user.avatar_url} />
          </a>
          <div className="contri-user-info">
            <a href={user.html_url} target="_blank" rel="noreferrer">
              <div className="contri-user-name">{user.login}</div>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
