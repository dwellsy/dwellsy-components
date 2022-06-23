import { Button } from "../components/buttons";
import Heading from "../components/text/Heading";
import Paragraph from "../components/text/Paragraph";

export const ButtonPage = () => {
  return (
    <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8 dark:bg-slate-800">
      <Heading level="h1" size="2xl">Buttons</Heading>

      <Paragraph>
        You can invoke the Button object with 
        <pre className="bg-white dark:bg-slate-900 my-8 border">
          {`
  <Button
    type="type"
    error={false}
    size="xl"
    disabled={false}
    className={whatever classNames you want to pass through (e.g., mr-2 for margins)}
  >Text (or whatever)</Button>
          `}
        </pre>
      </Paragraph>

      <div className="my-8">
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled={true}>Disabled</Button>
        <Button type="primary" error={true}>Primary</Button>
      </div>

      <div className="my-4">
        <Button type="secondary">Secondary</Button>
        <Button type="secondary" disabled={true}>Secondary</Button>
        <Button type="secondary" error={true}>Secondary</Button>
      </div>

      <div className="my-4">
        <Button type="outline">Outline Button</Button>
        <Button type="outline" disabled={true}>Disabled Outline</Button>
        <Button type="outline" error={true}>Outline Error</Button>
      </div>

      <div className="my-4">
        <Button>Generic Button</Button>
        <Button disabled={true}>Disabled Generic</Button>
        <Button error={true}>Generic Error</Button>
      </div>
    </main>
  )
}

export default ButtonPage;