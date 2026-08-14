"use strict";(self.webpackChunknext_formily=self.webpackChunknext_formily||[]).push([[6645],{56645:function(o,e,t){t.r(e),t.d(e,{texts:function(){return a}});const a=[{value:"As we all know, the form scene has always been the most complex scene in the front-end and back-end fields. What is the main complexity of it?",paraId:0,tocIndex:1},{value:"There are a lot of fields, how can the performance not deteriorate with the increase of the number of fields?",paraId:1,tocIndex:1},{value:"Field association logic is complex, how to implement complex linkage logic more simply? How to ensure that the form performance is not affected when the field is associated with the field?",paraId:2,tocIndex:1},{value:"One-to-Many (asynchronous)",paraId:3,tocIndex:1},{value:"Many-to-One (asynchronous)",paraId:3,tocIndex:1},{value:"Many-to-Many (asynchronous)",paraId:3,tocIndex:1},{value:"Complex form data management",paraId:4,tocIndex:1},{value:"Form value conversion logic is complex (front and back formats are inconsistent)",paraId:5,tocIndex:1},{value:"The logic of merging synchronous and asynchronous default values is complicated",paraId:5,tocIndex:1},{value:"Cross-form data communication, how to keep the performance from deteriorating with the increase in the number of fields?",paraId:5,tocIndex:1},{value:"Complex form state management",paraId:6,tocIndex:1},{value:"Focusing on the self-incrementing list scenario, how to make the array data move, and the field status can follow the move during the deletion process?",paraId:7,tocIndex:1},{value:"Scene reuse of forms",paraId:8,tocIndex:1},{value:"Query list",paraId:9,tocIndex:1},{value:"Dialog/Drawer form",paraId:9,tocIndex:1},{value:"Step form",paraId:9,tocIndex:1},{value:"Tab form",paraId:9,tocIndex:1},{value:"Dynamic rendering requirements are very strong",paraId:10,tocIndex:1},{value:"Field configuration allows non-professional front-ends to quickly build complex forms",paraId:11,tocIndex:1},{value:"Cross-terminal rendering, a JSON Schema, multi-terminal adaptation",paraId:11,tocIndex:1},{value:`How to describe the layout in the form protocol?
`,paraId:11,tocIndex:1},{value:"Vertical layout",paraId:12,tocIndex:1},{value:"Horizontal layout",paraId:12,tocIndex:1},{value:"Grid layout",paraId:12,tocIndex:1},{value:"Flexible layout",paraId:12,tocIndex:1},{value:"Free layout",paraId:12,tocIndex:1},{value:"How to describe the logic in the form protocol?",paraId:11,tocIndex:1},{value:"So many problems, how to solve them, think about it, But we still have to find a solution\uFF0CNot only to solve but also to solve elegantly, The Alibaba digital supply chain team, after experiencing a lot of middle and back-office practice and exploration, finally precipitated ",paraId:13,tocIndex:1},{value:"Formily form solution",paraId:13,tocIndex:1},{value:". All the problems mentioned above, after going through UForm to Formily1.x, until Formily2.x finally achieved the degree of ",paraId:13,tocIndex:1},{value:"elegant solution",paraId:13,tocIndex:1},{value:". So how does Formily 2.x solve these problems?",paraId:13,tocIndex:1},{value:"In order to solve the above problems, we can further refine the problem and come up with a breakthrough direction.",paraId:14,tocIndex:2},{value:"In the React scenario, to realize a form requirement, most of them use setState to realize field data collection. because form data needs to be collected and some linkage requirements are realized.This implementation is very simple and the mental cost is very low, but it also introduces performance problems, because each input will cause all fields to be rendered in full. Although there is diff at the DOM update level, diff also has a computational cost, which wastes a lot of computational resources. In terms of time complexity, the initial rendering of the form is O(n), and the field input is also O(n), which is obviously unreasonable.",paraId:15,tocIndex:3},{value:"Historical experience is always helpful to mankind. Decades ago, humans created the MVVM design pattern. The core of this design pattern is to abstract the view model and consume it at the DSL template layer.SL uses a certain dependency collection mechanism, and then uniformly schedules in the view model to ensure that each input is accurately rendered. This is the industrial-grade GUI form!",paraId:16,tocIndex:3},{value:"It just so happened that the github community abstracted a state management solution called Mobx for such MVVM models. The core capabilities of ",paraId:17,tocIndex:3},{value:"Mobx",paraId:17,tocIndex:3},{value:" are its dependency tracking mechanism and the abstraction capabilities of responsive models.",paraId:17,tocIndex:3},{value:"Therefore, with the help of Mobx, the O(n) problem in the form field input process can be completely solved, and it can be solved very elegantly. However, during the implementation of Formily 2.x, it was discovered that Mobx still has some problems that are not compatible with Formily's core ideas. In the end, we only can reinvent one wheel,",paraId:18,tocIndex:3},{value:"@next-formily/reactive",paraId:18,tocIndex:3},{value:" which continues the core idea of Mobx.",paraId:18,tocIndex:3},{value:"Mention here ",paraId:19,tocIndex:3},{value:"react-hook-form",paraId:19,tocIndex:3},{value:" , Very popular, known as the industry\u2019s top performance form solution, let\u2019s take a look at its simplest case:",paraId:19,tocIndex:3},{value:`import React from 'react'
import ReactDOM from 'react-dom'
import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit, errors } = useForm() // initialize the hook
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstname" ref={register} /> {/* register an input */}
      <input name="lastname" ref={register({ required: true })} />
      {errors.lastname && 'Last name is required.'}
      <input name="age" ref={register({ pattern: /\\d+/ })} />
      {errors.age && 'Please enter number for age.'}
      <input type="submit" />
    </form>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
`,paraId:20,tocIndex:3},{value:"Although the value management achieves accurate rendering, when the verification is triggered, the form will still be rendered in full. Because of the update of the errors state, the overall controlled rendering is necessary to achieve synchronization. This is only the full rendering of the verification meeting. In fact, there is linkage. To achieve linkage with react-hook-form, it also requires overall controlled rendering to achieve linkage. Therefore, if you want to truly achieve accurate rendering, it must be Reactive!",paraId:21,tocIndex:3},{value:"As mentioned in the previous question, the linkage of forms is very complicated, including various relationships between fields. Let\u2019s imagine that most form linkages are basically linkages triggered based on the values of certain fields. However, actual business requirements may be sophisticated. It is not only necessary to trigger linkage based on certain field values, but also based on other side-effect values, such as application status, server data status, page URL, internal data of a UI component of a field, and current Other data status of the field itself, some special asynchronous events, etc. Use a picture to describe:",paraId:22,tocIndex:4},{value:"As you can see from the above figure, in order to achieve a linkage relationship, the core is to associate certain state attributes of the field with certain data. Some data here can be external data or own data. For example, the display/hide of a field is associated with certain data, the value of a field is associated with certain data, and the disabling/editing of a field is associated with certain data. Here are three examples. We have actually abstracted it. One of the simplest Field model:",paraId:23,tocIndex:4},{value:`interface Field {
  value: any
  visible: boolean
  disabled: boolean
}
`,paraId:24,tocIndex:4},{value:"Of course, does the Field model only have these 3 attributes? Definitely not, if we want to express a field, then the path of the field must have, Because we want to describe the entire form tree structure, at the same time, we also need to manage the properties of the field corresponding to the UI component. For example, Input and Select have their properties. For example, the placeholder of Input is associated with some data, or the drop-down option of Select is associated with some data, so you can understand it. So, our Field model can look like this:",paraId:25,tocIndex:4},{value:`interface Field {
  path: string[]
  value: any
  visible: boolean
  disabled: boolean
  component: [Component, ComponentProps]
}
`,paraId:26,tocIndex:4},{value:"We have added the component attribute, which represents the UI component and UI component attribute corresponding to the field, so that the ability to associate certain data with the field component attribute, or even the field component, is realized. Are there any more? Of course, there are also, such as the outer package container of the field, usually we call it FormItem, which is mainly responsible for the interactive style of the field, such as the field title, the style of error prompts, etc., If we want to include more linkage, such as the linkage between certain data and FormItem, then we have to add the outer package container. There are many other attributes, which are not listed here.",paraId:27,tocIndex:4},{value:"From the above ideas, we can see that in order to solve the linkage problem, no matter how abstract we are, the field model will eventually be abstracted. It contains all the states related to the field. As long as these states are manipulated, linkage can be triggered.",paraId:28,tocIndex:4},{value:"Regarding accurate rendering, we have determined that we can choose a Reactive solution similar to Mobx. Although it is a reinvention of a wheel, the Reactive model is still very suitable for abstract responsive models. So based on the ability of Reactive, Formily, after constant trial and error and correction, finally designed a truly elegant form model. Such a form model solves the problem of the form domain, so it is also called a domain model. With such a domain model, we can make the linkage of the form enumerable and predictable, which also lays a solid foundation for the linkage of the protocol description to be discussed later.",paraId:29,tocIndex:4},{value:"The field model in the form domain model was mentioned earlier. If the design is more complete, it is not only a field model, but also a form model as the top-level model. The top-level model manages all the field models, and each field has its own Path. How to find these fields? The linkage relationship mentioned earlier is more of a passive dependency, but in some scenarios, we just need to modify the state of a field based on an asynchronous event action. Here is how to find a field elegantly. The same It has also undergone a lot of trial and error and correction. Formily's original path system @next-formily/path solves this problem very well. It not only makes the field lookup elegant, but it can also deal with the disgusting problem of inconsistent front-end and back-end data structures through destructuring expressions.",paraId:30,tocIndex:5},{value:"With the help of Mobx and the path system, we have created a relatively complete form scheme, but after this abstraction, our scheme is like a black box, and the outside world cannot perceive the internal state flow process of the scheme. If you want to implement some logic in a certain process stage, you cannot achieve it. So, here we need another concept, the life cycle. As long as we expose the entire form life cycle as an event hook to the outside world, we can achieve an abstract but flexible form solution.",paraId:31,tocIndex:6},{value:`If you want to implement a dynamically configurable form, you must make the form structure serializable.
There are many ways to serialize, which can be a UI description protocol based on the UI, or a data description protocol based on the data. Because the form itself is to maintain a copy of data, it is natural that for the form scenario, the data protocol is the most suitable. To describe the data structure, `,paraId:32,tocIndex:7},{value:"JSON-Schema",paraId:32,tocIndex:7},{value:" is now the most popular in the industry. Because the JSON Schema protocol itself has many verification-related attributes, this is naturally associated with form verification. Is the UI description protocol really not suitable for describing forms? No, the UI description protocol is suitable for more general UI expressions. Of course, the description form is not a problem, but it will be more front-end protocol. On the contrary, JSON-Schema is expressible at the back-end model layer, and is more versatile in describing data. Therefore, the two protocols have their own strengths, but in the field of pure forms, JSON-Schema will be more domain-oriented.",paraId:32,tocIndex:7},{value:"So, if we choose JSON-Schema, how do we describe the UI and how do we describe the logic? It is not realistic to simply describe the data and output the form pages available for actual business.",paraId:33,tocIndex:7},{value:"The solution of ",paraId:34,tocIndex:7},{value:"react-jsonschema-form",paraId:34,tocIndex:7},{value:` is that data is data and UI is UI. The advantage of this is that each protocol is a very pure protocol, but it brings a large maintenance cost and understanding cost.
To develop a form, users need to constantly switch between the two protocols mentally. Therefore, if you look at such a split from a technical perspective, it is very reasonable, but from a product perspective, the split is to throw the cost to the user. Therefore, Formily's form protocol will be more inclined to expand on JSON-Schema.`,paraId:34,tocIndex:7},{value:"So, how to expand? In order not to pollute the standard JSON-Schema attributes, we uniformly express the extended attributes in the x-* format:",paraId:35,tocIndex:7},{value:`{
  "type": "string",
  "title": "String",
  "description": "This is a string",
  "x-component": "Input",
  "x-component-props": {
    "placeholder": "please enter"
  }
}
`,paraId:36,tocIndex:7},{value:"In this way, the UI protocol and the data protocol are mixed together. As long as there is a unified extension agreement, the responsibilities of the two protocols can still be guaranteed to be single.",paraId:37,tocIndex:7},{value:"Then, what if you want to wrap a UI container on certain fields? Here, Formily defines a new schema type called ",paraId:38,tocIndex:7},{value:"void",paraId:38,tocIndex:7},{value:". No stranger to void, there is also void element in W3C specification, and void keyword in js. The former represents virtual elements, and the latter represents virtual pointers. Therefore, in JSON Schema, void is introduced to represent a virtual data node, which means that the node does not occupy the actual data structure. So, we can do this:",paraId:38,tocIndex:7},{value:`{
  "type": "void",
  "title": "card",
  "description": "This is a card",
  "x-component": "Card",
  "properties": {
    "string": {
      "type": "string",
      "title": "String",
      "description": "This is a string",
      "x-component": "Input",
      "x-component-props": {
        "placeholder": "please enter"
      }
    }
  }
}
`,paraId:39,tocIndex:7},{value:"In this way, a UI container can be described. Because the UI container can be described, we can easily encapsulate a scene-based component, such as FormStep. So how do we describe the linkage between fields? For example, one field needs to control the display and hide of another field. We can do this:",paraId:40,tocIndex:7},{value:`{
  "type": "object",
  "properties": {
    "source": {
      "type": "string",
      "title": "Source",
      "x-component": "Input",
      "x-component-props": {
        "placeholder": "please enter"
      }
    },
    "target": {
      "type": "string",
      "title": "Target",
      "x-component": "Input",
      "x-component-props": {
        "placeholder": "please enter"
      },
      "x-reactions": [
        {
          "dependencies": ["source"],
          "when": "{{$deps[0] == '123'}}",
          "fulfill": {
            "state": {
              "visible": true
            }
          },
          "otherwise": {
            "state": {
              "visible": false
            }
          }
        }
      ]
    }
  }
}
`,paraId:41,tocIndex:7},{value:"The target field is described with the help of ",paraId:42,tocIndex:7},{value:"x-reactions",paraId:42,tocIndex:7},{value:", which depends on the value of the source field. If the value is ",paraId:42,tocIndex:7},{value:"'123'",paraId:42,tocIndex:7},{value:", the target field is displayed, otherwise it is hidden. This linkage method is a passive linkage. What if we want to achieve active linkage ? It can be like this:",paraId:42,tocIndex:7},{value:`{
  "type": "object",
  "properties": {
    "source": {
      "type": "string",
      "title": "Source",
      "x-component": "Input",
      "x-component-props": {
        "placeholder": "please enter"
      },
      "x-reactions": [
        {
          "when": "{{$self.value == '123'}}",
          "target": "target",
          "fulfill": {
            "state": {
              "visible": true
            }
          },
          "otherwise": {
            "state": {
              "visible": false
            }
          }
        }
      ]
    },
    "target": {
      "type": "string",
      "title": "Target",
      "x-component": "Input",
      "x-component-props": {
        "placeholder": "please enter"
      }
    }
  }
}
`,paraId:43,tocIndex:7},{value:"Just change the location of ",paraId:44,tocIndex:7},{value:"x-reactions",paraId:44,tocIndex:7},{value:", put it on the source field, and then specify a target.",paraId:44,tocIndex:7},{value:"It can be seen that our linkage is actually based on:",paraId:45,tocIndex:7},{value:"condition",paraId:46,tocIndex:7},{value:"Condition-satisfied action",paraId:46,tocIndex:7},{value:"Unsatisfied action",paraId:46,tocIndex:7},{value:"To achieve. Because the internal state management uses the ",paraId:47,tocIndex:7},{value:"@next-formily/reactive",paraId:47,tocIndex:7},{value:" solution similar to Mobx, Formily easily realizes passive and active linkage scenarios, covering most business needs.",paraId:47,tocIndex:7},{value:"Therefore, our form can be described by protocol, and it can be configurable no matter how complicated the layout is or the linkage is very complicated.",paraId:48,tocIndex:7},{value:"I talked about the solutions to various problems at the beginning, so how do we design now to make Formily more self-consistent and elegant?",paraId:49,tocIndex:8},{value:"This picture mainly divides Formily into the kernel layer, UI bridge layer, extended component layer, and configuration application layer.",paraId:50,tocIndex:8},{value:"The kernel layer is UI-independent. It ensures that the logic and state of user management are not coupled to any framework. This has several advantages:",paraId:51,tocIndex:8},{value:"Logic and UI framework are decoupled, and framework-level migration will be done in the future, without extensive refactoring of business code.",paraId:52,tocIndex:8},{value:"The learning cost is uniform. If the user uses @next-formily/react, the business will be migrated to @next-formily/vue in the future, and the user does not need to learn again.",paraId:52,tocIndex:8},{value:"JSON Schema exists independently and is consumed by the UI bridging layer, ensuring the absolute consistency of protocol drivers under different UI frameworks, and there is no need to repeatedly implement protocol parsing logic.",paraId:53,tocIndex:8},{value:"Extend the component layer to provide a series of form scene components to ensure that users can use it out of the box. No need to spend a lot of time for secondary development.",paraId:54,tocIndex:8},{value:"high performance",paraId:55,tocIndex:10},{value:"Out of the box",paraId:55,tocIndex:10},{value:"Linkage logic to achieve high efficiencyv",paraId:55,tocIndex:10},{value:"Cross-terminal capability, logic can be cross-frame, cross-terminal reuse",paraId:55,tocIndex:10},{value:"Dynamic rendering capability",paraId:55,tocIndex:10},{value:"The learning cost is relatively high. Although 2.x has already converged a large number of concepts, there is still a certain learning cost.",paraId:56,tocIndex:11},{value:"Alibaba",paraId:57,tocIndex:12},{value:"Tencent",paraId:57,tocIndex:12},{value:"ByteDance",paraId:57,tocIndex:12},{value:"Q: Now that I have Vue, why do I still need to provide @next-formily/vue?",paraId:58,tocIndex:13},{value:"Answer: Vue is a UI framework. The problem it solves is a wider range of UI problems. Although its reactive ability is outstanding in form scenarios, at least it is more convenient than native React to write forms, but if it is in more complex form scenarios , We still need to do a lot of abstraction and encapsulation, so @next-formily/vue is to help you do these abstract encapsulation things, really let you develop super-complex form applications efficiently and conveniently.",paraId:59,tocIndex:13},{value:"Q: What is the biggest advantage of Formily2.x compared to 1.x?",paraId:60,tocIndex:13},{value:"Answer: The cost of learning, yes, the core is to allow users to understand Formily more quickly. We have tried our best to avoid all kinds of obscure logic and boundary problems during the 2.x design process.",paraId:61,tocIndex:13},{value:"Q: What is the browser compatibility of Formily 2.x?",paraId:62,tocIndex:13},{value:"Answer: IE is not supported, because the implementation of Reactive strongly relies on Proxy.",paraId:63,tocIndex:13}]}}]);
