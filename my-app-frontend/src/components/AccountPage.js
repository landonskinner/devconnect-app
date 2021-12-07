import PostContainer from "./PostContainer"

function AccountPage({ name, search }) {
    return (
        <div>
            <PostContainer name={name} search={search} />
        </div>
    )
}

export default AccountPage
