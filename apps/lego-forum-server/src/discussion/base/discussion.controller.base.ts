/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DiscussionService } from "../discussion.service";
import { DiscussionCreateInput } from "./DiscussionCreateInput";
import { Discussion } from "./Discussion";
import { Post } from "../../post/base/Post";
import { DiscussionFindManyArgs } from "./DiscussionFindManyArgs";
import { DiscussionWhereUniqueInput } from "./DiscussionWhereUniqueInput";
import { DiscussionUpdateInput } from "./DiscussionUpdateInput";

export class DiscussionControllerBase {
  constructor(protected readonly service: DiscussionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Discussion })
  async createDiscussion(
    @common.Body() data: DiscussionCreateInput
  ): Promise<Discussion> {
    return await this.service.createDiscussion({
      data: {
        ...data,

        comment: data.comment
          ? {
              connect: data.comment,
            }
          : undefined,
      },
      select: {
        author: true,

        comment: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Discussion] })
  @ApiNestedQuery(DiscussionFindManyArgs)
  async discussions(@common.Req() request: Request): Promise<Discussion[]> {
    const args = plainToClass(DiscussionFindManyArgs, request.query);
    return this.service.discussions({
      ...args,
      select: {
        author: true,

        comment: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Discussion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async discussion(
    @common.Param() params: DiscussionWhereUniqueInput
  ): Promise<Discussion | null> {
    const result = await this.service.discussion({
      where: params,
      select: {
        author: true,

        comment: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Discussion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDiscussion(
    @common.Param() params: DiscussionWhereUniqueInput,
    @common.Body() data: DiscussionUpdateInput
  ): Promise<Discussion | null> {
    try {
      return await this.service.updateDiscussion({
        where: params,
        data: {
          ...data,

          comment: data.comment
            ? {
                connect: data.comment,
              }
            : undefined,
        },
        select: {
          author: true,

          comment: {
            select: {
              id: true,
            },
          },

          content: true,
          createdAt: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Discussion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDiscussion(
    @common.Param() params: DiscussionWhereUniqueInput
  ): Promise<Discussion | null> {
    try {
      return await this.service.deleteDiscussion({
        where: params,
        select: {
          author: true,

          comment: {
            select: {
              id: true,
            },
          },

          content: true,
          createdAt: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
