const linksSocialMedia = {
  github: 'Gabriellopes232',
  youtube: 'UC7maEQvwKAaMDQ_2JqlZeCw',
  facebook: 'profile.php?id=100017221774276',
  instagram: 'gabriellopesxz'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(reponse => reponse.json())
    .then(data => {
      userName.textContent = data.name
    })
}
getGitHubProfileInfos()
