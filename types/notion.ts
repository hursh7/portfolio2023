export interface Notion {
  map(
    arg0: (project: any, idx: number) => JSX.Element
  ): import('react').ReactNode;
  results: [
    {
      properties: {
        tag: {
          id?: string;
          type?: string;
          multi_select: Array<
            [
              {
                id?: string;
                name: string;
                color?: string;
              }
            ]
          >;
        };
        number: {
          id?: string;
          type?: string;
          number: number;
        };
        page: {
          id?: string;
          type?: string;
          url: string;
        };
        workPeriod?: {
          id?: string;
          type?: string;
          date?: {
            start?: string;
            end?: string;
            time_zone?: null;
          };
        };
        title: {
          id?: string;
          type?: string;
          rich_text: Array<{
            type?: string;
            text?: {
              content?: string;
              link?: string;
            };
            annotations?: {
              bold?: boolean;
              italic?: boolean;
              strikethrough?: boolean;
              underline?: boolean;
              code?: boolean;
              color?: string;
            };
            plain_text: string;
            href?: string;
          }>;
        };
        img: {
          id?: string;
          type?: string;
          files: Array<{
            name?: string;
            type?: string;
            file: {
              url: string;
              expiry_time?: string;
            };
          }>;
        };
        description: {
          id?: string;
          type?: string;
          rich_text: Array<{
            type?: string;
            text?: {
              content?: string;
              link?: string;
            };
            annotations?: {
              bold?: boolean;
              italic?: boolean;
              strikethrough?: boolean;
              underline?: boolean;
              code?: boolean;
              color?: string;
            };
            plain_text: string;
            href?: string;
          }>;
        };
        github: {
          id?: string;
          type?: string;
          url: string;
        };
      };
    }
  ];
}
