import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, LineChart, Server } from "lucide-react"
import Image from "next/image"

export function CaseStudies() {
  return (
    <section className="w-full py-24 bg-muted/20 flex flex-col items-center px-4">
      <div className="container max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Case Studies & Analytics</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world data pipelines and analytics projects built and taught to demonstrate hands-on architectural competence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Case Study 1 */}
          <Card className="bg-background border-primary/10 hover:border-primary/30 transition-colors shadow-sm flex flex-col">
            <CardHeader>
              <Database className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Enterprise RAG Pipeline</CardTitle>
              <CardDescription>Vector Database & LLM Integration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden border border-border shadow-sm">
                <Image 
                  src="/p--sivamohanbabu/assets/buildinganalytics/Screenshot (3).png"
                  alt="Modern Data Architecture Diagram"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-auto">
                Built an end-to-end Retrieval-Augmented Generation pipeline using FastAPI, LangChain, and Pinecone to allow semantic search over corporate documents.
              </p>
            </CardContent>
          </Card>

          {/* Case Study 2 */}
          <Card className="bg-background border-primary/10 hover:border-primary/30 transition-colors shadow-sm flex flex-col">
            <CardHeader>
              <LineChart className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Sales Analytics Dashboard</CardTitle>
              <CardDescription>SQL & Power BI Architecture</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col">
              <div className="relative aspect-video w-full bg-muted/40 rounded-md overflow-hidden border border-border/50 group">
                <Image 
                  src={encodeURI("/assets/buildinganalytics/WhatsApp Image 2026-07-12 at 11.25.54 PM.jpeg")}
                  alt="Sales Analytics Dashboard"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-auto">
                Engineered a complex ETL process consolidating multi-regional sales data into a unified SQL data warehouse, visualized dynamically in Power BI.
              </p>
            </CardContent>
          </Card>

          {/* Case Study 3 */}
          <Card className="bg-background border-primary/10 hover:border-primary/30 transition-colors shadow-sm md:col-span-2 lg:col-span-1 flex flex-col">
            <CardHeader>
              <Server className="w-8 h-8 text-primary mb-2" />
              <CardTitle>High-Concurrency MERN App</CardTitle>
              <CardDescription>Full-Stack Scalability</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col">
              <div className="relative aspect-video w-full bg-muted/40 rounded-md overflow-hidden border border-border/50 group">
                {/* Reusing one of the analytic images as a placeholder since only 2 were provided */}
                <Image 
                  src={encodeURI("/assets/buildinganalytics/WhatsApp Image 2026-07-12 at 11.25.54 PM.jpeg")}
                  alt="High-Concurrency MERN App"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-auto">
                Developed a scalable real-time inventory management system utilizing Node.js streams and MongoDB aggregations to handle high RPS.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
