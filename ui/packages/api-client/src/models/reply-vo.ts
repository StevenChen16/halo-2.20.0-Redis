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


// May contain unused imports in some cases
// @ts-ignore
import { CommentStatsVo } from './comment-stats-vo';
// May contain unused imports in some cases
// @ts-ignore
import { Metadata } from './metadata';
// May contain unused imports in some cases
// @ts-ignore
import { OwnerInfo } from './owner-info';
// May contain unused imports in some cases
// @ts-ignore
import { ReplySpec } from './reply-spec';

/**
 * A chunk of items.
 * @export
 * @interface ReplyVo
 */
export interface ReplyVo {
    /**
     * 
     * @type {Metadata}
     * @memberof ReplyVo
     */
    'metadata': Metadata;
    /**
     * 
     * @type {OwnerInfo}
     * @memberof ReplyVo
     */
    'owner': OwnerInfo;
    /**
     * 
     * @type {ReplySpec}
     * @memberof ReplyVo
     */
    'spec': ReplySpec;
    /**
     * 
     * @type {CommentStatsVo}
     * @memberof ReplyVo
     */
    'stats': CommentStatsVo;
}

