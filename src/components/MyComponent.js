import React, { useState } from 'react';
import gql from "graphql-tag/src";
import { debounce } from 'lodash';
import { useQuery } from "@apollo/react-hooks";
import {Card, Col, Divider, Input, Row} from "antd";

const DATA_QUERY = gql`
  query Search($search: String!){
    artists: queryArtists(byName: $search) {
      id
      name
      image
      albums {
        id
      }
    }
  }
`;

const MyComponent = () => {
  const [search, setSearch] = useState('Red');
  const { data, loading } = useQuery(DATA_QUERY, { variables: { search }});

  console.log('data', search, data);

  return (
    <div className="my-component-container">
      <Input.Search
        loading={loading}
        size="large"
        placeholder="Search for artist"
        defaultValue={search}
        onChange={e => {
          if (!loading) debounce(setSearch, 500)(e.target.value)
        }}
        style={{ width: '100%' }}
      />
      <Divider />
      <Row gutter={[18,18]}>
        {((data && data.artists) || []).map(artist => (
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card hoverable cover={<img alt="from query" src={artist.image} />}>
              <Card.Meta title={artist.name} description={`${artist.albums.length} Albums`} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyComponent;
