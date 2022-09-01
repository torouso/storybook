import React from 'react'
import { storiesOf } from '@storybook/react'
import { withXD } from 'storybook-addon-xd-designs'
import { Button } from 'antd';
// import { PlaygroundComponent } from "./playground.component";

storiesOf('My stories', module)
  .addDecorator(withXD)
  .add('My awesome story', () => <Button>Hello, World!</Button>, {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/bc4f0c89-8100-4b31-be36-8197ec7a09de-e91c/screen/96e803ee-edaa-43c8-a4fb-2f56d8bb1f37/specs/',
    }
  })
/*   .add('My awesome story', () => <Button>Hello, World!</Button>, {
    design: {
      specUrl: 'https://xd.adobe.com/spec/181eaf80-9e7a-4ea6-7dc8-e21dfd9b2d80-6e2f/screen/58270c9e-502b-4737-be32-a5dfe9523bb5/Color/',
      reviewUrl: 'https://xd.adobe.com/view/813cbece-c467-47ce-67e3-b60caacc2ff8-f70d/',
    }
  }) */

  /* export default {
    title: "Playground/Button",
    component: PlaygroundComponent,
    parameters: {
      componentSubtitle: `Desc`,
      docs: {
        iframeHeight: 100,
      },
      design: {
        artboardUrl:
          "https://xd.adobe.com/view/ae7472ea-b4ac-47c4-4eb9-7aff91446d91-d845/screen/ca95c951-f010-498f-84c6-1cf10f344616/",
      },
    },
    decorators: [withXD],
  }; */