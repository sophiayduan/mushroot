import type {Test} from "../types/test.tsx"

const BACKEND_URL = "http://localhost:8080";

type TestCardProps = {
    test: Test;
}

function TestCard({test}: TestCardProps) {
    return (
        <div className="bg-[#ffefcf] rounded-xl ">
            {/*the image*/}
            <div>
                {test.thumbnail}
            </div>

            <div>
                {test.title}
            </div>

            <div>
                {test.tags?.length > 0 && (
                    <div className="display-flex display-wrap mt-4">
                        {test.tags.map(g => (
                            <div key={g} className="mb-2 bg-[#aabda0] rounded-xl">
                                {g}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default TestCard;