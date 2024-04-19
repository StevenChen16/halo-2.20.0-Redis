/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ExtensionPointSpec
 */
export interface ExtensionPointSpec {
    /**
     * 
     * @type {string}
     * @memberof ExtensionPointSpec
     */
    'className': string;
    /**
     * 
     * @type {string}
     * @memberof ExtensionPointSpec
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof ExtensionPointSpec
     */
    'displayName': string;
    /**
     * 
     * @type {string}
     * @memberof ExtensionPointSpec
     */
    'icon'?: string;
    /**
     * 
     * @type {string}
     * @memberof ExtensionPointSpec
     */
    'type': ExtensionPointSpecTypeEnum;
}

export const ExtensionPointSpecTypeEnum = {
    Singleton: 'SINGLETON',
    MultiInstance: 'MULTI_INSTANCE'
} as const;

export type ExtensionPointSpecTypeEnum = typeof ExtensionPointSpecTypeEnum[keyof typeof ExtensionPointSpecTypeEnum];


