import type {Test} from "../types/test.tsx"

const BACKEND_URL = "http://localhost:8080";

type TestCardProps = {
    test: Test;
}

function TestCard({ test }: TestCardProps) {
    const thumbnailSrc = test.thumbnail
        ? `data:image/jpeg;base64,${test.thumbnail}`
        : null;

    function openPdf() {
        if (!test.data) return;
        // test.data is a base64 string from the backend
        const byteChars = atob(test.data);
        const byteArray = new Uint8Array(byteChars.length);
        for (let i = 0; i < byteChars.length; i++) {
            byteArray[i] = byteChars.charCodeAt(i);
        }
        const blob = new Blob([byteArray], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
    }

    return (
        <div className="bg-[#BECCC0] rounded-xl overflow-hidden cursor-pointer" onClick={openPdf}>
            <div className="w-full h-32 bg-[#e8d5a0]">
                {thumbnailSrc
                    ? <img src={thumbnailSrc} alt={test.title} className="w-full h-full object-cover" />
                    : <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">No image</div>
                }
            </div>

            <div className="p-2">
                <div className="text-2xl text-[#435245] px-2 pb-2">{test.title}</div>

                <div className="flex flex-wrap gap-1 px-2 pb-2">
                    <div className="px-2 py-1 bg-[#f3cbc5] rounded-xl text-[#435245]">
                        {test.courseCode}
                    </div>
                    <div className="px-2 py-1 bg-[#f3cbc5] rounded-xl text-[#435245]">
                        {test.teacherName}
                    </div>
                    <div className="px-2 py-1 bg-[#f3cbc5] rounded-xl text-[#435245]">
                        {test.year}
                    </div>
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

        </div>
    );
}

export default TestCard;