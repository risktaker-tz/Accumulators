import { TemplateLayout } from '@/components/custom/template-layout'
import { LiveAccumulator } from '@/components/live-accumulator'

export default function Home() {
  return (
    <TemplateLayout>
      <LiveAccumulator />
    </TemplateLayout>
  )
}