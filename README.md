A component collection for Angular, work in Progress..

# Available components
HeaderModule

# Install
npm install ngx-component-library

# Import required Modules
In you app.module.ts import the Modules you need.
For example if you need the HeaderModule:

```
import { HeaderModule } from 'ngx-component-collection';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


# Create NPM Package
Pump version in package.json
`npm run packagr` // creates dist folder
`cd ./dist`
`npm pack` 

-> `my-component-library-0.0.0.tgz` should now be created within `./dist`

# Publish NPM Package
`npm login`
`npm publish dist`
