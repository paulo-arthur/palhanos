import Menu from "@/components/Menu/Menu";
import getTopics from "../lib/getTopics";
import Topic from "@/components/Topic/Topic";

export default function explorePage() {
    const topics = getTopics();
    console.log(Object.entries(topics));
    return (
        <main className="w-3/5 flex flex-col justify-center">
            <Menu />
            {Object.entries(topics).map(([topic, count]) => {
                return (     
                    <Topic
                    key={topic}
                    data = {{
                        title: topic,
                        count: count.length
                    }}/>
                );
            })}
        </main>
    );
}