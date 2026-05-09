import type {Test} from "../types/test.tsx"

const BACKEND_URL = "http://localhost:8080";

type TestCardProps = {
    test: Test;
}

function TestCard({ test }: TestCardProps) {
    const thumbnailSrc = test.thumbnail
        ? `data:image/jpeg;base64,${test.thumbnail}`
        : null;

    return (
        <div className="bg-[#ffefcf] rounded-xl overflow-hidden">
            <div className="w-full h-32 bg-[#e8d5a0]">
                {thumbnailSrc
                    ? <img src={thumbnailSrc} alt={test.title} className="w-full h-full object-cover" />
                    : <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">No image</div>
                }
            </div>

            <div className="p-3">
                <div className="font-medium">{test.title}</div>
                <div className="text-sm text-gray-500">{test.teacherName} · {test.year}</div>
            </div>

            {test.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 px-3 pb-3">
                    {test.tags.map(g => (
                        <div key={g} className="px-2 py-1 bg-[#aabda0] rounded-xl text-xs">
                            {g}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default TestCard;