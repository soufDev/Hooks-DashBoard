import styled from 'styled-components';

export const ContentTable = styled.div`
  width: 80%;
  
  margin: 0 auto;
  margin-top: 50px;
  overflow-x: auto;
  & {
    th, td {
      text-align: left;
      padding: 8px;
    }    
    tr:nth-child(even){background-color: #f2f2f2}
    tr {
      cursor: pointer;
    }
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Th = styled.th`
  background-color: #f0eded4a;
  border-bottom: solid 2px red;
  color: rgb(189, 189, 189);
`;