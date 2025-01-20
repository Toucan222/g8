import ExampleTool from './ExampleTool'
import LLMDemoTool from './LLMDemoTool'
import MyNewTool from './MyNewTool'

export const tools = [
  {
    id: 1,
    title: 'Example Tool',
    description: 'A placeholder tool to demonstrate the system.',
    component: ExampleTool
  },
  {
    id: 2,
    title: 'LLM Demo',
    description: 'Try the DeepSeek LLM with a user prompt',
    component: LLMDemoTool
  },
  {
    id: 3,
    title: 'My New Tool',
    description: 'A new tool using DeepSeek',
    component: MyNewTool
  }
]
