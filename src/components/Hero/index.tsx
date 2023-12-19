import { Loading } from "../Loading"

const Hero = () => {

    const isLoading = false;

    return (
        <div>
            <h1>Henrique</h1>
            <Loading loading={isLoading} nameScreen="Hero" />
        </div>

    )
}

export { Hero }