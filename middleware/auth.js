export default function ({credirect, route }) {
  let token = localStorage.token
  if (!token) {
    const path = encodeURIComponent(route.path);
    return redirect(`/?r=${path}`); 
  }
}
  