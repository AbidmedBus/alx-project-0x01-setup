export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()
posts.map, <UserCard
  return {
    props: {
      posts
    }
export default Users;
  }
}
