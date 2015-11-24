export { BROWSER_PROVIDERS, ELEMENT_PROBE_BINDINGS, ELEMENT_PROBE_PROVIDERS, inspectNativeElement, BrowserDomAdapter, By, Title } from 'angular2/src/platform/browser_common';
import { isPresent } from 'angular2/src/facade/lang';
import { BROWSER_PROVIDERS, BROWSER_APP_COMMON_PROVIDERS } from 'angular2/src/platform/browser_common';
import { platform } from 'angular2/core';
/**
 * An array of providers that should be passed into `application()` when bootstrapping a component
 * when all templates
 * have been precompiled offline.
 */
export const BROWSER_APP_PROVIDERS = BROWSER_APP_COMMON_PROVIDERS;
/**
 * See {@link bootstrap} for more information.
 */
export function bootstrapStatic(appComponentType, customProviders, initReflector) {
    if (isPresent(initReflector)) {
        initReflector();
    }
    let appProviders = isPresent(customProviders) ? [BROWSER_APP_PROVIDERS, customProviders] : BROWSER_APP_PROVIDERS;
    return platform(BROWSER_PROVIDERS).application(appProviders).bootstrap(appComponentType);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl9zdGF0aWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyX3N0YXRpYy50cyJdLCJuYW1lcyI6WyJib290c3RyYXBTdGF0aWMiXSwibWFwcGluZ3MiOiJBQUFBLFNBQ0UsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0Qix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixFQUFFLEVBQ0YsS0FBSyxRQUNBLHNDQUFzQyxDQUFDO09BRXZDLEVBQU8sU0FBUyxFQUFhLE1BQU0sMEJBQTBCO09BRTdELEVBQ0wsaUJBQWlCLEVBQ2pCLDRCQUE0QixFQUM3QixNQUFNLHNDQUFzQztPQUN0QyxFQUFlLFFBQVEsRUFBWSxNQUFNLGVBQWU7QUFFL0Q7Ozs7R0FJRztBQUNILGFBQWEscUJBQXFCLEdBQzlCLDRCQUE0QixDQUFDO0FBRWpDOztHQUVHO0FBQ0gsZ0NBQWdDLGdCQUFzQixFQUN0QixlQUF3RCxFQUN4RCxhQUF3QjtJQUN0REEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDN0JBLGFBQWFBLEVBQUVBLENBQUNBO0lBQ2xCQSxDQUFDQTtJQUVEQSxJQUFJQSxZQUFZQSxHQUNaQSxTQUFTQSxDQUFDQSxlQUFlQSxDQUFDQSxHQUFHQSxDQUFDQSxxQkFBcUJBLEVBQUVBLGVBQWVBLENBQUNBLEdBQUdBLHFCQUFxQkEsQ0FBQ0E7SUFDbEdBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQTtBQUMzRkEsQ0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge1xuICBCUk9XU0VSX1BST1ZJREVSUyxcbiAgRUxFTUVOVF9QUk9CRV9CSU5ESU5HUyxcbiAgRUxFTUVOVF9QUk9CRV9QUk9WSURFUlMsXG4gIGluc3BlY3ROYXRpdmVFbGVtZW50LFxuICBCcm93c2VyRG9tQWRhcHRlcixcbiAgQnksXG4gIFRpdGxlXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9icm93c2VyX2NvbW1vbic7XG5cbmltcG9ydCB7VHlwZSwgaXNQcmVzZW50LCBDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtQcm9taXNlfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL3Byb21pc2UnO1xuaW1wb3J0IHtcbiAgQlJPV1NFUl9QUk9WSURFUlMsXG4gIEJST1dTRVJfQVBQX0NPTU1PTl9QUk9WSURFUlNcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2Jyb3dzZXJfY29tbW9uJztcbmltcG9ydCB7Q29tcG9uZW50UmVmLCBwbGF0Zm9ybSwgcmVmbGVjdG9yfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuLyoqXG4gKiBBbiBhcnJheSBvZiBwcm92aWRlcnMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIGludG8gYGFwcGxpY2F0aW9uKClgIHdoZW4gYm9vdHN0cmFwcGluZyBhIGNvbXBvbmVudFxuICogd2hlbiBhbGwgdGVtcGxhdGVzXG4gKiBoYXZlIGJlZW4gcHJlY29tcGlsZWQgb2ZmbGluZS5cbiAqL1xuZXhwb3J0IGNvbnN0IEJST1dTRVJfQVBQX1BST1ZJREVSUzogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4gPVxuICAgIEJST1dTRVJfQVBQX0NPTU1PTl9QUk9WSURFUlM7XG5cbi8qKlxuICogU2VlIHtAbGluayBib290c3RyYXB9IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYm9vdHN0cmFwU3RhdGljKGFwcENvbXBvbmVudFR5cGU6IFR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVByb3ZpZGVycz86IEFycmF5PGFueSAvKlR5cGUgfCBQcm92aWRlciB8IGFueVtdKi8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0UmVmbGVjdG9yPzogRnVuY3Rpb24pOiBQcm9taXNlPENvbXBvbmVudFJlZj4ge1xuICBpZiAoaXNQcmVzZW50KGluaXRSZWZsZWN0b3IpKSB7XG4gICAgaW5pdFJlZmxlY3RvcigpO1xuICB9XG5cbiAgbGV0IGFwcFByb3ZpZGVycyA9XG4gICAgICBpc1ByZXNlbnQoY3VzdG9tUHJvdmlkZXJzKSA/IFtCUk9XU0VSX0FQUF9QUk9WSURFUlMsIGN1c3RvbVByb3ZpZGVyc10gOiBCUk9XU0VSX0FQUF9QUk9WSURFUlM7XG4gIHJldHVybiBwbGF0Zm9ybShCUk9XU0VSX1BST1ZJREVSUykuYXBwbGljYXRpb24oYXBwUHJvdmlkZXJzKS5ib290c3RyYXAoYXBwQ29tcG9uZW50VHlwZSk7XG59Il19